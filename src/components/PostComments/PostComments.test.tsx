import { render, screen, fireEvent } from '@testing-library/react'
import PostComments from './'

describe('PostComments', () => {
    test('deve permitir inserir dois comentários', () => {
        render(<PostComments />)

        // Buscar elementos pelos data-testid
        const campoComentario = screen.getByTestId('campo-comentario')
        const btnComentar = screen.getByTestId('btn-comentar')
        const listaComentarios = screen.getByTestId('lista-comentarios')

        // Adicionar primeiro comentário
        fireEvent.change(campoComentario, { target: { value: 'Primeiro comentário' } })
        fireEvent.click(btnComentar)

        // Adicionar segundo comentário
        fireEvent.change(campoComentario, { target: { value: 'Segundo comentário' } })
        fireEvent.click(btnComentar)

        // Verificar se os dois comentários aparecem na lista
        expect(screen.getByText('Primeiro comentário')).toBeInTheDocument()
        expect(screen.getByText('Segundo comentário')).toBeInTheDocument()

        // Verificar se a lista tem 2 itens
        const comentarios = listaComentarios.querySelectorAll('li')
        expect(comentarios).toHaveLength(2)
    })
})