'use strict';

const tableWrapper = (Component, tableType) => {
    return class WrappedTable extends React.Component {
        constructor(props) {
            super(props);
            this.convertedList = [];
        }

        getYear = (date = new Date()) => new Date(date).getFullYear();

        getMonth = (date) => new Date(date).toLocaleString('ru-ru', {month: 'short'});

        amountMonth = (result, item) => {
            const {date, amount} = item;
            const dateMonth = this.getMonth(date);
            const indexMonth = result.findIndex(el => el.month === dateMonth);

            if (indexMonth !== -1) {
                result[indexMonth].amount += amount;
            } else {
                result = [...result, {month: dateMonth, amount}];
            }

            return result;
        };

        amountYear = (result, item) => {
            const {date, amount} = item;
            const dateYear = this.getYear(date);
            const indexYear = result.findIndex(el => el.year === dateYear);

            if (indexYear !== -1) {
                result[indexYear].amount += amount;
            } else {
                result = [...result, {year: dateYear, amount}]
            }

            return result;
        };

        componentWillUpdate(newProps) {
            let list = [...newProps.list];
            if (tableType === 'year') {
                {
                    list = list.reduce(this.amountYear, []);

                }
            } else if (tableType === 'month') {
                {
                    list = list.reduce(this.amountMonth, []);

                }
            } else {
                {
                    list.sort((a, b) => a.date < b.date ? 1 : -1);
                }
            }

            this.convertedList = list;
        }


        render() {
            return (
                <Component {...this.props} list={this.convertedList}/>
            );
        }
    }
};

const WrapMonthTable = tableWrapper(MonthTable, 'month');
const WrapYearTable = tableWrapper(YearTable, 'year');
const WrapSortTable = tableWrapper(SortTable);

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        };
    }

    componentDidMount() {
        axios.get('https://api.myjson.com/bins/l2s9l')
            .then(response => {
                this.setState(response.data);
            });
    }

    render() {
        return (
            <div id="app">
                <WrapMonthTable list={this.state.list}/>
                <WrapYearTable list={this.state.list}/>
                <WrapSortTable list={this.state.list}/>
            </div>
        );
    }
}
