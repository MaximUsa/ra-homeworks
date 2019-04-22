const {InputNumber} = window['antd'];

const Inputs = () => {
    return (
        <div>
            <InputField
                textBefore="Стоимость: "
                textAfter=" руб."
                type="number"
                name="price"
                value="2000000"
                placeholder="Введите сумму"
                maxLength="25"
            />
            <InputField
                textBefore="На руках: "
                textAfter=" руб."
                type="number"
                name="money"
                value="200000"
                placeholder="Введите сумму"
                maxLength="25"
            />
            <InputField
                textBefore="Срок кредита: "
                textAfter=" лет."
                type="number"
                name="duration"
                value="5"
                placeholder="Введите сумму"
                maxLength="25"
                step="1"
            />
        </div>
    );
};

class InputField extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.value
        };
    }

    onChange = value => {
        this.setState({
            value
        });
    };

    render() {
        return (
            <div>
                <label>
                    {this.props.textBefore}
                    <br/>
                    <InputNumber
                        step="1000"
                        {...this.props}
                        min={0}
                        onChange={this.onChange}
                        value={this.state.value}
                        style={{width: "240px"}}
                    />
                    {this.props.textAfter}
                </label>
            </div>
        );
    }
}
