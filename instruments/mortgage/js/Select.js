const {Select} = window['antd'];

const Option = Select.Option;

class Autocomplete extends React.Component {

    handleChange = (value) => {
        console.log(`selected ${value}`);
    }

    handleFilter = (input, option) => {
        option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
    }

    render() {
        return (
            <div>
                Тип квартиры:
                <br/>
                <Select
                    showSearch
                    style={{width: "240px"}}
                    defaultValue="on-build-apartment"
                    placeholder="Выберите тип квартиры"
                    optionFilterProp="children"
                    onChange={this.handleChange}
                    filterOption={this.handleFilter}>
                    <Option value="on-build-apartment">Квартира в новостройке</Option>
                    <Option value="ready-apartment">Готовая квартира</Option>
                    <Option value="country-house">Загородный дом</Option>
                </Select>
            </div>
        )
    }
}
