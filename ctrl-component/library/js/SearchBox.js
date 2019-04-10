const SearchBox = (props) => {

    const filter = event => {
        props.filterBooks(event.currentTarget.value);
    };

    return (
        <input
            type="text"
            placeholder="Введите название или автора"
            onChange={filter}
            value={props.value}
        />
    );
};
