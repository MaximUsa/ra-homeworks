const {Form, Select, Input, Button} = window['antd'];
const FormItem = Form.Item;
const InputGroup = Input.Group;

const MortgateCalculator = () => {
    return (
        <div>
            <Form className="select-form" action="">
                <FormItem><Autocomplete/></FormItem>
                <FormItem>
                    <InputGroup>
                        <Inputs/>
                    </InputGroup>
                </FormItem>
                <FormItem><Button type="primary">Отправить</Button></FormItem>
            </Form>
        </div>
    )
};
