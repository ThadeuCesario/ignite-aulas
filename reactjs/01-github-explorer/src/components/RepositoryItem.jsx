export default function RepositoryItem(props) {

    const {repository} = props;
    /**
     * Veja que temos o ?? aplicado em nosso codigo. 
     * É praticamente igual ao || , porém ela desconsidera que o 0 seja um valor inválido.
     */

     console.log(props);

    return (
        <li>
            <strong>{repository?.name ?? 'Default'}</strong>
            <p>{repository?.description ?? '-'}</p>
            <a href={repository?.link}>Acessar repositório</a>
        </li>
    );
}