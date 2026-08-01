'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Contact = (function (_React$Component) {
    _inherits(Contact, _React$Component);

    function Contact(props) {
        _classCallCheck(this, Contact);

        _get(Object.getPrototypeOf(Contact.prototype), 'constructor', this).call(this, props);
        this.state = {
            form: {
                type: '',
                name: '',
                email: '',
                cel: '',
                whatsapp: '',
                mensagem: ''
            },
            button: true,
            loading: false,
            requireds: {
                name: true,
                email: true,
                cel: true,
                mensagem: true
            },
            showMsg: 0,
            msg: '',
            iconType: 0
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.contact = this.contact.bind(this);
        this.validate = this.validate.bind(this);
        this.selectType = this.selectType.bind(this);
    }

    _createClass(Contact, [{
        key: 'componentDidMount',
        value: function componentDidMount() {}
    }, {
        key: 'handleInputChange',
        value: function handleInputChange(event) {
            var target = event.target;
            var value = target.type === 'checkbox' ? target.checked : target.value;
            var name = target.name;

            if (target.name === 'cel') {
                value = maskCel(value);
            }
            if (target.name === 'whatsapp') {
                value = maskCel(value);
            }

            var form = this.state.form;
            form[name] = value;

            this.setState({ form: form });
        }
    }, {
        key: 'validate',
        value: function validate() {

            var valid = true;

            var requireds = this.state.requireds;

            var form = this.state.form;

            for (var index in requireds) {
                if (!form[index] || form[index] === '') {
                    requireds[index] = false;
                    valid = false;
                } else {
                    requireds[index] = true;
                }
            }

            if (!this.validateName(this.state.form.name)) {
                requireds.name = false;
                valid = false;
            }

            if (this.validateCel(this.state.form.cel) === "") {
                requireds.cel = false;
                valid = false;
            }

            this.setState({ requireds: requireds });

            return valid;
        }
    }, {
        key: 'validateName',
        value: function validateName(name) {
            var array_name = name.split(' ');
            if (array_name.length < 2) {
                return false;
            }

            return true;
        }
    }, {
        key: 'selectType',
        value: function selectType(type) {
            var typeSelect = 0;
            if (type === 1) {
                typeSelect = "Dúvidas";
            }
            if (type === 2) {
                typeSelect = "Problemas";
            }
            if (type === 3) {
                typeSelect = "Sugestão";
            }
            if (type === 4) {
                typeSelect = "Outros";
            }

            var formTipe = {
                type: typeSelect,
                name: this.state.form.name,
                email: this.state.form.email,
                cel: this.state.form.cel,
                whatsapp: this.state.form.whatsapp,
                mensagem: this.state.form.mensagem
            };

            this.setState({ form: formTipe, iconType: type });
        }
    }, {
        key: 'validateCel',
        value: function validateCel(cel) {
            cel = cel.replace(/[^0-9]/g, '');
            var qtd = cel.length;

            if (qtd < 10 || qtd > 11) {
                return false;
            }
            if (qtd === 11) {
                if (cel.substr(2, 1) != 9) {
                    return false;
                }
                if (cel.substr(3, 1) != 9 && cel.substr(3, 1) != 8 && cel.substr(3, 1) != 7 && cel.substr(3, 1) != 6) {
                    return false;
                }
            }
            if (qtd === 10) {
                if (cel.substr(2, 1) != 9 && cel.substr(2, 1) != 8 && cel.substr(2, 1) != 7 && cel.substr(2, 1) != 6) {
                    return false;
                }
            }
            return true;
        }
    }, {
        key: 'contact',
        value: function contact(e) {
            //console.log(this.validate());
            if (!this.validate()) {
                return;
            }

            this.setState({ loading: true, button: false, showMsg: 0, msg: '' }, function () {

                $.ajax({
                    method: 'POST',
                    url: 'contact',
                    headers: {
                        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                    },
                    data: {
                        form: this.state.form
                    },
                    cache: false,
                    success: (function (data) {
                        this.setState({ loading: false, showMsg: 1, msg: 'Enviado com sucesso!' });
                    }).bind(this),
                    error: (function (xhr, status, err) {
                        console.error(status, err.toString());
                        this.setState({ loading: false, showMsg: 2, msg: 'Ocorreu um erro. Tente novamente!' });
                    }).bind(this)
                });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this = this;

            return React.createElement(
                'form',
                null,
                React.createElement('input', { type: 'hidden', name: '_token', value: '{{ csrf_token() }}' }),
                React.createElement(
                    'div',
                    null,
                    React.createElement(
                        'p',
                        null,
                        React.createElement(
                            'strong',
                            null,
                            'Como podemos ajudar?'
                        )
                    ),
                    React.createElement(
                        'ul',
                        { className: 'select-form' },
                        React.createElement(
                            'li',
                            { className: 'box-list-i text-center', style: { backgroundColor: this.state.iconType === 1 ? '#E6DACE' : '' }, onClick: function () {
                                    return _this.selectType(1);
                                } },
                            React.createElement('i', { className: 'fas fa-exclamation-circle fa-3x' }),
                            React.createElement(
                                'p',
                                null,
                                'Dúvidas'
                            )
                        ),
                        React.createElement(
                            'li',
                            { className: 'box-list-i text-center', style: { backgroundColor: this.state.iconType === 2 ? '#E6DACE' : '' }, onClick: function () {
                                    return _this.selectType(2);
                                } },
                            React.createElement('i', { className: 'fas fa-bug fa-3x' }),
                            React.createElement(
                                'p',
                                null,
                                'Problemas'
                            )
                        ),
                        React.createElement(
                            'li',
                            { className: 'box-list-i text-center', style: { backgroundColor: this.state.iconType === 3 ? '#E6DACE' : '' }, onClick: function () {
                                    return _this.selectType(3);
                                } },
                            React.createElement('i', { className: 'far fa-lightbulb fa-3x' }),
                            React.createElement(
                                'p',
                                null,
                                'Sugestão'
                            )
                        ),
                        React.createElement(
                            'li',
                            { className: 'box-list-i text-center', style: { backgroundColor: this.state.iconType === 4 ? '#E6DACE' : '' }, onClick: function () {
                                    return _this.selectType(4);
                                } },
                            React.createElement('i', { className: 'fas fa-boxes fa-3x' }),
                            React.createElement(
                                'p',
                                null,
                                'Outros'
                            )
                        )
                    ),
                    React.createElement('br', null)
                ),
                React.createElement(
                    'div',
                    { className: 'label-float' },
                    React.createElement('input', { className: "form-control form-g " + (this.state.requireds.name ? '' : 'invalid-field'), type: 'text', name: 'name', onChange: this.handleInputChange, placeholder: ' ', required: this.state.requireds.name ? '' : 'required' }),
                    React.createElement(
                        'label',
                        { htmlFor: 'name' },
                        'Nome'
                    ),
                    React.createElement(
                        'div',
                        { className: 'label-box-info' },
                        React.createElement(
                            'p',
                            { style: { display: this.state.requireds.name ? 'none' : 'block' } },
                            React.createElement('i', { className: 'fas fa-exclamation-circle' }),
                            ' Digite o nome e sobre nome'
                        )
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'label-float' },
                    React.createElement('input', { className: "form-control form-g" + (this.state.requireds.email ? '' : 'invalid-field'), type: 'text', name: 'email', onChange: this.handleInputChange, value: this.state.form.email, placeholder: ' ', required: this.state.requireds.email ? '' : 'required' }),
                    React.createElement(
                        'label',
                        { htmlFor: 'email' },
                        'E-mail'
                    ),
                    React.createElement(
                        'div',
                        { className: 'label-box-info' },
                        React.createElement(
                            'p',
                            { style: { display: this.state.requireds.email ? 'none' : 'block' } },
                            React.createElement('i', { className: 'fas fa-exclamation-circle' }),
                            ' Escolha um endereço de e-mail valido'
                        )
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'row' },
                    React.createElement(
                        'div',
                        { className: 'col-md-6' },
                        React.createElement(
                            'div',
                            { className: 'label-float' },
                            React.createElement('input', { className: "form-control form-g", type: 'text', name: 'cel', onChange: this.handleInputChange, value: this.state.form.cel, placeholder: ' ', maxLength: '15', required: this.state.requireds.cel ? '' : 'required' }),
                            React.createElement(
                                'label',
                                { htmlFor: 'cel' },
                                'Celular'
                            ),
                            React.createElement(
                                'div',
                                { className: 'label-box-info' },
                                React.createElement(
                                    'p',
                                    { style: { display: this.state.requireds.name ? 'none' : 'block' } },
                                    React.createElement('i', { className: 'fas fa-exclamation-circle' }),
                                    ' Digite um número de celular'
                                )
                            )
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'col-md-6' },
                        React.createElement(
                            'div',
                            { className: 'label-float' },
                            React.createElement('input', { className: "form-control", type: 'text', name: 'whatsapp', onChange: this.handleInputChange, value: this.state.form.whatsapp, placeholder: ' ', maxLength: '15' }),
                            React.createElement(
                                'label',
                                { htmlFor: 'name' },
                                'Whatsapp',
                                React.createElement(
                                    'span',
                                    { className: "label-float-optional" },
                                    ' - Opicional'
                                )
                            ),
                            React.createElement('div', { className: 'label-box-info' })
                        )
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'row' },
                    React.createElement(
                        'div',
                        { className: 'col-md-12' },
                        React.createElement(
                            'div',
                            { className: 'label-float-tx' },
                            React.createElement('textarea', { className: 'form-control', name: 'mensagem', onChange: this.handleInputChange, value: this.state.form.mensagem,
                                rows: '5', placeholder: ' ' }),
                            React.createElement(
                                'label',
                                { htmlFor: 'mensagem' },
                                'Mansagem'
                            ),
                            React.createElement(
                                'div',
                                { className: 'label-box-info-tx-off' },
                                React.createElement(
                                    'p',
                                    null,
                                    ' '
                                )
                            )
                        )
                    )
                ),
                React.createElement('div', { className: 'clear-float' }),
                React.createElement(
                    'div',
                    { className: 'dorder-container' },
                    React.createElement(
                        'button',
                        { className: 'btn btn-theme bg-pri', type: 'button', style: { display: this.state.button ? 'block' : 'none' }, onClick: this.contact },
                        'Enviar ',
                        React.createElement('i', { className: 'fas fa-angle-right' })
                    )
                ),
                React.createElement('br', null),
                React.createElement(
                    'div',
                    { style: { display: this.state.showMsg === 1 ? '' : 'none' }, className: 'text-success' },
                    this.state.msg
                ),
                React.createElement(
                    'div',
                    { style: { display: this.state.showMsg === 2 ? '' : 'none' }, className: 'text-danger' },
                    this.state.msg
                ),
                React.createElement(
                    'div',
                    { style: { display: this.state.loading ? 'block' : 'none' } },
                    React.createElement('i', { className: 'fa fa-spin fa-spinner' }),
                    'Processando'
                )
            );
        }
    }]);

    return Contact;
})(React.Component);

ReactDOM.render(React.createElement(Contact, null), document.getElementById('contact'));