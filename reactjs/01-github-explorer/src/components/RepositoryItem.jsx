export default function RepositoryItem(props) {

    const {repository} = props;
    /**
     * Veja que temos o ?? aplicado em nosso codigo. 
     * É praticamente igual ao || , porém ela desconsidera que o 0 seja um valor inválido.
     */

    return (
        <li>
            <strong>{repository?.name}</strong>
            <p>{repository?.description ?? 'No description found'}</p>
            <a href={repository?.url}>Acessar repositório</a>
        </li>
    );
}