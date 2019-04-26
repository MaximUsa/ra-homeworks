'use strict';

const content = [
    {
        title: 'Компоненты',
        article: 'Каждый компонент являются законченной частью пользовательского интерфейса и сам управляет своим состоянием, а композиция компонентов (соединение) позволяет создавать более сложные компоненты. Таким образом, создается иерархия компонентов, причем каждый отдельно взятый компонент независим сам по себе. Такой подход позволяет строить сложные интерфейсы, где есть множество состояний, и взаимодействовать между собой.'
    },
    {
        title: 'Выучил раз, используй везде!',
        article: 'После изучения React вы сможете использовать его концепции не только в браузере, но также и при разработке мобильных приложений с использованием React Native.'
    },
    {
        title: 'Использование JSX',
        article: 'JSX является языком, расширяющим синтаксис стандартного Javascript. По факту он позволяет писать HTML-код в JS-скриптах. Такой подход упрощает разработку компонентов и повышает читаемость кода.'
    }

];

const ToggleOpen = (event) => {
    return event.currentTarget.classList.toggle('open');
};

const Title = ({children}) => {
    return (
        <h2 className="title">{children}</h2>
    );
};
const SectionHead = ({children}) => {
    return <h3 className="sectionhead">{children}</h3>
};

const ArticleWrap = ({children}) => {
    return (
        <div className="articlewrap">
            <div className="article">
                {children}
            </div>
        </div>
    )
};

const Section = (props) => {
    const {content: {title, article}} = props;
    return (
        <section className='section' onClick={ToggleOpen}>
            <button>toggle</button>
            <SectionHead>{title}</SectionHead>
            <ArticleWrap>{article}</ArticleWrap>
        </section>
    )
};

const App = (props) => {
    const {content} = props;
    return (
        <main className='main'>
            <Title>React</Title>
            {content.map((item, idx) => {
                return <Section content={item} key={idx}/>
            })}
        </main>
    )
};

ReactDOM.render(
    <App content={content}/>, document.getElementById('accordian')
);
