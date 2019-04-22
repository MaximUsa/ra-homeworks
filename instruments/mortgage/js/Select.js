const {AutoComplete} = antd;
const source = {
    'new_building,': 'Квартира в новостройке',
    'old_building,': 'Готовая квартира',
    'countryhouse': 'Загородный дом'
};

class AutocompleteTest extends React.Component {
    state = {
        apartment: ''
    };

    handleChange = (value) => {
        this.setState({
            apartment: value
        });
    };

    render() {
        const {apartment} = this.state;
        return (
            <AutoComplete
                direction="down"
                selectedPosition="above"
                label="Тип квартиры"
                source={source}
                onChange={this.handleChange}
                value={apartment}
            />
        );
    }
}
