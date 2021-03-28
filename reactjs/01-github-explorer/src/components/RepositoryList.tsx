import { useState, useEffect } from "react";

import RepositoryItem from "./RepositoryItem";

import '../styles/repositories.scss';

interface Repository {
    id: number;
    name: string;
    description: string;
    url: string;
}

const RepositoryList = () => {
    const [repositories, setRepositories] = useState<Repository[]>([]);

    useEffect(() => {
        fetch('https://api.github.com/users/ThadeuCesario/repos')
            .then(resp => resp.json())
            .then(data => setRepositories(data))
    }, []);

    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>

            <ul>
                {repositories.map(repository => {
                    const {id} = repository;
                    return (
                        <RepositoryItem key={id} repository={repository} />
                    )
                })}
            </ul>
        </section>
    )
}

export default RepositoryList;