'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Compartilhe = (function (_React$Component) {
    _inherits(Compartilhe, _React$Component);

    function Compartilhe(props) {
        _classCallCheck(this, Compartilhe);

        _get(Object.getPrototypeOf(Compartilhe.prototype), 'constructor', this).call(this, props);
        this.state = {
            form: {
                nome: '',
                esfera: '',

                idioma: '',
                id_recurso: '',
                id_tipo_recurso: '',
                id_formato: ''

            },
            button: true,
            loading: false,
            requireds: {
                nome: '',
                esfera: '',

                id_recurso: '',
                id_tipo_recurso: '',
                id_formato: '',
                idioma: ''
            },
            showMsg: 0,
            msg: '',
            iconType: 0,
            formData: {
                idiomas: [],
                formato_recurso: [],
                dimensoes: []
            },
            formatoSelecionado: {
                id: null,
                nome: ''
            },
            idiomaSelecionado: 0,
            categoriasSelecionado: 0
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.compartilhe = this.compartilhe.bind(this);
        this.validate = this.validate.bind(this);
        this.selectDimensao = this.selectDimensao.bind(this);
        this.getData = this.getData.bind(this);
        this.selectFormato = this.selectFormato.bind(this);
        this.selectIdioma = this.selectIdioma.bind(this);
        this.selectCategorias = this.selectCategorias.bind(this);
    }

    _createClass(Compartilhe, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.getData();
        }
    }, {
        key: 'getData',
        value: function getData() {
            $.ajax({
                method: 'GET',
                url: '/json/compartilhe.json',
                cache: false,
                success: (function (data) {
                    this.setState({ formData: data });
                }).bind(this),
                error: (function (xhr, status, err) {
                    console.error(status, err.toString());
                    this.setState({ loadingCep: false });
                }).bind(this)
            });
        }
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

            this.setState({ requireds: requireds });

            return valid;
        }
    }, {
        key: 'selectDimensao',
        value: function selectDimensao(type) {
            var formDimensao = {
                id_dimensao: type,
                nome: '',
                esfera: ''

            };

            /*id_recurso: '',
            nome: '',
            esfera: '',
            id_tipo_recurso: '',
            id_formato: '',
            idioma: '',*/
            this.setState({ form: formDimensao, iconType: type });
        }
    }, {
        key: 'selectFormato',
        value: function selectFormato(id, nome) {
            var formatoSelecionado = {
                id: id,
                nome: '',
                esfera: ''

            };
            var formIdioma = {
                idioma: id,
                nome: '',
                esfera: ''
            };

            /*name: this.state.form.name,
            email: this.state.form.email,
            cel: this.state.form.cel,
            whatsapp:  this.state.form.whatsapp,
            mensagem:  this.state.form.mensagem,*/
            this.setState({ formatoSelecionado: formatoSelecionado, form: formIdioma });
        }
    }, {
        key: 'selectIdioma',
        value: function selectIdioma(id) {
            this.setState({ idiomaSelecionado: id });
        }
    }, {
        key: 'selectCategorias',
        value: function selectCategorias(id) {
            this.setState({ categoriasSelecionado: id });
        }
    }, {
        key: 'compartilhe',
        value: function compartilhe(e) {
            //console.log(this.validate());
            if (!this.validate()) {
                return;
            }

            this.setState({ loading: true, button: false, showMsg: 0, msg: '' }, function () {

                $.ajax({
                    method: 'POST',
                    url: 'compartilhe',
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

            var dimensoes = [];
            if (this.state.formData.dimensoes) {
                dimensoes = this.state.formData.dimensoes.map((function (item, index) {
                    var _this = this;

                    return React.createElement(
                        'li',
                        { style: { backgroundColor: this.state.iconType === 1 ? '#E6DACE' : '' }, onClick: function () {
                                return _this.selectDimensao(item.id);
                            }, key: 'dimensoes_' + item.id },
                        React.createElement('img', { src: "/img/dimensao" + item.id + ".png", alt: '' })
                    );
                }).bind(this));
            }

            var idiomas = [];
            if (this.state.formData.idiomas) {
                idiomas = this.state.formData.idiomas.map((function (item, index) {
                    var _this2 = this;

                    return React.createElement(
                        'li',
                        {
                            key: 'idioma_' + index,
                            onClick: function () {
                                return _this2.selectIdioma(item.id);
                            },
                            style: { background: item.id === this.state.idiomaSelecionado ? '#E6DACE' : '' } },
                        item.nome
                    );
                }).bind(this));
            }

            var formato_recurso = [];
            if (this.state.formData.formato_recurso) {
                formato_recurso = this.state.formData.formato_recurso.map((function (item, index) {
                    var _this3 = this;

                    return React.createElement(
                        'li',
                        { key: 'idioma_' + index, onClick: function () {
                                return _this3.selectFormato(item.id, item.nome);
                            }, style: { background: item.id === this.state.formatoSelecionado.id ? '#E6DACE' : '' } },
                        item.nome
                    );
                }).bind(this));
            }

            var categorias = [];
            if (this.state.formData.categorias) {
                categorias = this.state.formData.categorias.map((function (item, index) {
                    var _this4 = this;

                    return React.createElement(
                        'li',
                        { key: 'categorias_' + index, onClick: function () {
                                return _this4.selectCategorias(item.id, item.nome);
                            }, style: { background: item.id === this.state.categoriasSelecionado.id ? '#E6DACE' : '' } },
                        item.nome
                    );
                }).bind(this));
            }

            return React.createElement(
                'form',
                null,
                React.createElement('input', { type: 'hidden', name: '_token', value: '{{ csrf_token() }}' }),
                React.createElement(
                    'div',
                    { className: 'row' },
                    React.createElement(
                        'div',
                        { className: 'col-md-7' },
                        React.createElement(
                            'div',
                            { className: 'label-float' },
                            React.createElement('input', { className: "form-control form-g " + (this.state.requireds.nome ? '' : 'invalid-field'), type: 'text', name: 'nome', onChange: this.handleInputChange, placeholder: ' ', required: this.state.requireds.nome ? '' : 'required' }),
                            React.createElement(
                                'label',
                                { htmlFor: 'nome' },
                                'Nome'
                            ),
                            React.createElement(
                                'div',
                                { className: 'label-box-info' },
                                React.createElement(
                                    'p',
                                    { style: { display: this.state.requireds.nome ? 'none' : 'block' } },
                                    React.createElement('i', { className: 'fas fa-exclamation-circle' }),
                                    ' Digite o nome e sobre nome'
                                )
                            )
                        ),
                        React.createElement(
                            'div',
                            { className: 'label-float' },
                            React.createElement('input', { className: "form-control form-g " + (this.state.requireds.esfera ? '' : 'invalid-field'), type: 'text', name: 'esfera', onChange: this.handleInputChange, placeholder: ' ', required: this.state.requireds.esfera ? '' : 'required' }),
                            React.createElement(
                                'label',
                                { htmlFor: 'esfera' },
                                'Esfera'
                            ),
                            React.createElement(
                                'div',
                                { className: 'label-box-info' },
                                React.createElement(
                                    'p',
                                    { style: { display: this.state.requireds.esfera ? 'none' : 'block' } },
                                    React.createElement('i', { className: 'fas fa-exclamation-circle' }),
                                    ' Digite o nome e sobre nome'
                                )
                            )
                        ),
                        React.createElement(
                            'p',
                            null,
                            'Tipo de arquivo:'
                        ),
                        React.createElement(
                            'ul',
                            { className: 'btn-form' },
                            formato_recurso
                        ),
                        React.createElement('br', null),
                        React.createElement(
                            'div',
                            { className: 'text-center', style: { display: this.state.formatoSelecionado.id ? '' : 'none' } },
                            React.createElement(
                                'ul',
                                { className: 'btn-form text-center' },
                                React.createElement(
                                    'li',
                                    null,
                                    React.createElement('i', { className: 'far fa-file-pdf fa-3x' }),
                                    React.createElement('br', null),
                                    'Selecionar ',
                                    this.state.formatoSelecionado.nome
                                )
                            )
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'col-md-1' },
                        ' '
                    ),
                    React.createElement(
                        'div',
                        { className: 'col-md-4' },
                        '#'
                    )
                ),
                React.createElement('br', null),
                React.createElement('div', { className: 'clear-float' }),
                React.createElement(
                    'div',
                    { className: 'dorder-container' },
                    React.createElement(
                        'button',
                        { className: 'btn btn-theme bg-pri', type: 'button', style: { display: this.state.button ? 'block' : 'none' }, onClick: this.compartilhe },
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

    return Compartilhe;
})(React.Component);

ReactDOM.render(React.createElement(Compartilhe, null), document.getElementById('compartilhe'));
/*<p>Selecione os temas:</p>
<ul className="toggle">
   {categorias}
</ul>
<p>Selecione a dimensão:</p>
<ul className="select-form">
   {dimensoes}
</ul>*/ /*<p>Escolha um indicador:</p>
        <select name="select" className="form-control">
           <option value="0">Selecione</option>
           <option value="valor2" selected>Valor 2</option>
           <option value="valor3">Valor 3</option>
        </select>
        <br/>*/ /* <p>Idioma:</p>
                <ul className="btn-form">
                    {idiomas}
                </ul>*/ /*<div className="label-float">
                           <input className={"form-control form-g "+(this.state.requireds.name ? '' : 'invalid-field')} type="text" name="name" onChange={this.handleInputChange} placeholder=" " required={this.state.requireds.name ? '' : 'required'}/>
                           <label htmlFor="name">Nome</label>
                           <div className="label-box-info">
                               <p style={{display: this.state.requireds.name ? 'none' : 'block'}}><i className="fas fa-exclamation-circle"/> Digite o nome e sobre nome</p>
                           </div>
                        </div>
                         <div className="label-float">
                           <input className={"form-control form-g"+(this.state.requireds.email ? '' : 'invalid-field')} type="text" name="email" onChange={this.handleInputChange} value={this.state.form.email} placeholder=" " required={this.state.requireds.email ? '' : 'required'}/>
                           <label htmlFor="email">E-mail</label>
                           <div className="label-box-info">
                               <p style={{display: this.state.requireds.email ? 'none' : 'block'}}><i className="fas fa-exclamation-circle"/> Escolha um endereço de e-mail valido</p>
                           </div>
                        </div>*/