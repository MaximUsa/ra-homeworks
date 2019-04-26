'use strict';

const AuthForm = onAuth => {

    const auth = (event) => {
        event.preventDefault();
        if ((!onAuth) || (typeof onAuth !== 'function')) return null;
        const elementFrom = event.currentTarget.elements;
        const authForm = {
            name: elementFrom.name.value,
            email: elementFrom.email.value,
            password: elementFrom.password.value
        };
        onAuth(authForm);
    };

    function regExEmail(event) {
        return event.currentTarget.value = event.currentTarget.value.replace(/[^\w@.]+/gi, '');
    }

    function regExPassword(event) {
        return event.currentTarget.value = event.currentTarget.value.replace(/[^\w]+/gi, '')
    }

    return (
        <form className="ModalForm" onSubmit={auth} action="/404/auth/" method="POST">
            <div className="Input">
                <input required type="text" placeholder="Имя" name='name'/>
                <label> </label>
            </div>
            <div className="Input">
                <input type="email" onChange={regExEmail} placeholder="Электронная почта" name='email'/>
                <label> </label>
            </div>
            <div className="Input">
                <input required type="password" onChange={regExPassword} placeholder="Пароль" name='password'/>
                <label> </label>
            </div>
            <button type="submit">
                <span>Войти</span>
                <i className="fa fa-fw fa-chevron-right"/>
            </button>
        </form>
    );

};
