class Compartilhe extends React.Component {
    constructor(props) {
        super(props);
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

    componentDidMount() {
        this.getData();
    }

    getData() {
        $.ajax({
            method: 'GET',
            url: '/json/compartilhe.json',
            cache: false,
            success: function (data) {
                this.setState({ formData: data });
            }.bind(this),
            error: function (xhr, status, err) {
                console.error(status, err.toString());
                this.setState({ loadingCep: false });
            }.bind(this)
        });
    }

    handleInputChange(event) {
        const target = event.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        if (target.name === 'cel') {
            value = maskCel(value);
        }
        if (target.name === 'whatsapp') {
            value = maskCel(value);
        }

        let form = this.state.form;
        form[name] = value;

        this.setState({ form: form });
    }

    validate() {

        let valid = true;

        let requireds = this.state.requireds;

        let form = this.state.form;

        for (let index in requireds) {
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

    selectDimensao(type) {
        let formDimensao = {
            id_dimensao: type,
            nome: '',
            esfera: ''

            /*id_recurso: '',
            nome: '',
            esfera: '',
            id_tipo_recurso: '',
            id_formato: '',
            idioma: '',*/
        };

        this.setState({ form: formDimensao, iconType: type });
    }

    selectFormato(id, nome) {
        let formatoSelecionado = {
            id: id,
            nome: '',
            esfera: ''

        };
        let formIdioma = {
            idioma: id,
            nome: '',
            esfera: ''
            /*name: this.state.form.name,
            email: this.state.form.email,
            cel: this.state.form.cel,
            whatsapp:  this.state.form.whatsapp,
            mensagem:  this.state.form.mensagem,*/
        };

        this.setState({ formatoSelecionado: formatoSelecionado, form: formIdioma });
    }

    selectIdioma(id) {
        this.setState({ idiomaSelecionado: id });
    }

    selectCategorias(id) {
        this.setState({ categoriasSelecionado: id });
    }

    compartilhe(e) {
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
                success: function (data) {
                    this.setState({ loading: false, showMsg: 1, msg: 'Enviado com sucesso!' });
                }.bind(this),
                error: function (xhr, status, err) {
                    console.error(status, err.toString());
                    this.setState({ loading: false, showMsg: 2, msg: 'Ocorreu um erro. Tente novamente!' });
                }.bind(this)
            });
        });
    }

    render() {

        let dimensoes = [];
        if (this.state.formData.dimensoes) {
            dimensoes = this.state.formData.dimensoes.map(function (item, index) {
                return React.createElement(
                    'li',
                    { style: { backgroundColor: this.state.iconType === 1 ? '#E6DACE' : '' }, onClick: () => this.selectDimensao(item.id), key: 'dimensoes_' + item.id },
                    React.createElement('img', { src: "/img/dimensao" + item.id + ".png", alt: '' })
                );
            }.bind(this));
        }

        let idiomas = [];
        if (this.state.formData.idiomas) {
            idiomas = this.state.formData.idiomas.map(function (item, index) {
                return React.createElement(
                    'li',
                    {
                        key: 'idioma_' + index,
                        onClick: () => this.selectIdioma(item.id),
                        style: { background: item.id === this.state.idiomaSelecionado ? '#E6DACE' : '' } },
                    item.nome
                );
            }.bind(this));
        }

        let formato_recurso = [];
        if (this.state.formData.formato_recurso) {
            formato_recurso = this.state.formData.formato_recurso.map(function (item, index) {
                return React.createElement(
                    'li',
                    { key: 'idioma_' + index, onClick: () => this.selectFormato(item.id, item.nome), style: { background: item.id === this.state.formatoSelecionado.id ? '#E6DACE' : '' } },
                    item.nome
                );
            }.bind(this));
        }

        let categorias = [];
        if (this.state.formData.categorias) {
            categorias = this.state.formData.categorias.map(function (item, index) {
                return React.createElement(
                    'li',
                    { key: 'categorias_' + index, onClick: () => this.selectCategorias(item.id, item.nome), style: { background: item.id === this.state.categoriasSelecionado.id ? '#E6DACE' : '' } },
                    item.nome
                );
            }.bind(this));
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
                    '\xA0'
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
}

ReactDOM.render(React.createElement(Compartilhe, null), document.getElementById('compartilhe'));