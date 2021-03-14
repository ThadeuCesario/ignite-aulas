import { useState, useEffect } from "react";

import RepositoryItem from "./RepositoryItem";

import '../styles/repositories.scss';

const RepositoryList = () => {
    const [repositories, setRepositories] = useState([]);

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
                    const {id, name, description, url} = repository;
                    const repositoryData = {
                        name,
                        description,
                        url
                    }
                    return (
                        <RepositoryItem key={id} repository={repositoryData} />
                    )
                })}
            </ul>
        </section>
    )
}

export default RepositoryList;