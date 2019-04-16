'use strict';

function Viewing() {
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.props = props;
        }

        render() {
            const {views, type} = this.props;
            if (views > 1000) {
                return <Popular>{type === 'article' ? <Article {...this.props} /> : <Video {...this.props}/>}</Popular>
            }
            if (views < 100) {
                return <New>{type === 'article' ? <Article {...this.props} /> : <Video {...this.props}/>}</New>
            }
            return type === 'article' ? <Article {...this.props} /> : <Video {...this.props} />;
        }
    }

}

const GetItem = Viewing();

const List = props => {
    return props.list.map(item => {
        return <GetItem {...item}/>
    });
};
