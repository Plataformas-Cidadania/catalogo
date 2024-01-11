class Contact extends React.Component {
  constructor(props) {
    super(props);
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

  componentDidMount() {}

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
    this.setState({
      form: form
    });
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

    if (!this.validateName(this.state.form.name)) {
      requireds.name = false;
      valid = false;
    }

    if (this.validateCel(this.state.form.cel) === "") {
      requireds.cel = false;
      valid = false;
    }

    this.setState({
      requireds: requireds
    });
    return valid;
  }

  validateName(name) {
    let array_name = name.split(' ');

    if (array_name.length < 2) {
      return false;
    }

    return true;
  }

  selectType(type) {
    let typeSelect = 0;

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

    let formTipe = {
      type: typeSelect,
      name: this.state.form.name,
      email: this.state.form.email,
      cel: this.state.form.cel,
      whatsapp: this.state.form.whatsapp,
      mensagem: this.state.form.mensagem
    };
    this.setState({
      form: formTipe,
      iconType: type
    });
  }

  validateCel(cel) {
    cel = cel.replace(/[^0-9]/g, '');
    let qtd = cel.length;

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

  contact(e) {
    //console.log(this.validate());
    if (!this.validate()) {
      return;
    }

    this.setState({
      loading: true,
      button: false,
      showMsg: 0,
      msg: ''
    }, function () {
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
        success: function (data) {
          this.setState({
            loading: false,
            showMsg: 1,
            msg: 'Enviado com sucesso!'
          });
        }.bind(this),
        error: function (xhr, status, err) {
          console.error(status, err.toString());
          this.setState({
            loading: false,
            showMsg: 2,
            msg: 'Ocorreu um erro. Tente novamente!'
          });
        }.bind(this)
      });
    });
  }

  render() {
    return /*#__PURE__*/React.createElement("form", null, /*#__PURE__*/React.createElement("input", {
      type: "hidden",
      name: "_token",
      value: "{{ csrf_token() }}"
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "Como podemos ajudar?")), /*#__PURE__*/React.createElement("ul", {
      className: "select-form"
    }, /*#__PURE__*/React.createElement("li", {
      className: "box-list-i text-center",
      style: {
        backgroundColor: this.state.iconType === 1 ? '#E6DACE' : ''
      },
      onClick: () => this.selectType(1)
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-exclamation-circle fa-3x"
    }), /*#__PURE__*/React.createElement("p", null, "D\xFAvidas")), /*#__PURE__*/React.createElement("li", {
      className: "box-list-i text-center",
      style: {
        backgroundColor: this.state.iconType === 2 ? '#E6DACE' : ''
      },
      onClick: () => this.selectType(2)
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-bug fa-3x"
    }), /*#__PURE__*/React.createElement("p", null, "Problemas")), /*#__PURE__*/React.createElement("li", {
      className: "box-list-i text-center",
      style: {
        backgroundColor: this.state.iconType === 3 ? '#E6DACE' : ''
      },
      onClick: () => this.selectType(3)
    }, /*#__PURE__*/React.createElement("i", {
      className: "far fa-lightbulb fa-3x"
    }), /*#__PURE__*/React.createElement("p", null, "Sugest\xE3o")), /*#__PURE__*/React.createElement("li", {
      className: "box-list-i text-center",
      style: {
        backgroundColor: this.state.iconType === 4 ? '#E6DACE' : ''
      },
      onClick: () => this.selectType(4)
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-boxes fa-3x"
    }), /*#__PURE__*/React.createElement("p", null, "Outros"))), /*#__PURE__*/React.createElement("br", null)), /*#__PURE__*/React.createElement("div", {
      className: "label-float"
    }, /*#__PURE__*/React.createElement("input", {
      className: "form-control form-g " + (this.state.requireds.name ? '' : 'invalid-field'),
      type: "text",
      name: "name",
      onChange: this.handleInputChange,
      placeholder: " ",
      required: this.state.requireds.name ? '' : 'required'
    }), /*#__PURE__*/React.createElement("label", {
      htmlFor: "name"
    }, "Nome"), /*#__PURE__*/React.createElement("div", {
      className: "label-box-info"
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        display: this.state.requireds.name ? 'none' : 'block'
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-exclamation-circle"
    }), " Digite o nome e sobre nome"))), /*#__PURE__*/React.createElement("div", {
      className: "label-float"
    }, /*#__PURE__*/React.createElement("input", {
      className: "form-control form-g" + (this.state.requireds.email ? '' : 'invalid-field'),
      type: "text",
      name: "email",
      onChange: this.handleInputChange,
      value: this.state.form.email,
      placeholder: " ",
      required: this.state.requireds.email ? '' : 'required'
    }), /*#__PURE__*/React.createElement("label", {
      htmlFor: "email"
    }, "E-mail"), /*#__PURE__*/React.createElement("div", {
      className: "label-box-info"
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        display: this.state.requireds.email ? 'none' : 'block'
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-exclamation-circle"
    }), " Escolha um endere\xE7o de e-mail valido"))), /*#__PURE__*/React.createElement("div", {
      className: "row"
    }, /*#__PURE__*/React.createElement("div", {
      className: "col-md-6"
    }, /*#__PURE__*/React.createElement("div", {
      className: "label-float"
    }, /*#__PURE__*/React.createElement("input", {
      className: "form-control form-g",
      type: "text",
      name: "cel",
      onChange: this.handleInputChange,
      value: this.state.form.cel,
      placeholder: " ",
      maxLength: "15",
      required: this.state.requireds.cel ? '' : 'required'
    }), /*#__PURE__*/React.createElement("label", {
      htmlFor: "cel"
    }, "Celular"), /*#__PURE__*/React.createElement("div", {
      className: "label-box-info"
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        display: this.state.requireds.name ? 'none' : 'block'
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "fas fa-exclamation-circle"
    }), " Digite um n\xFAmero de celular")))), /*#__PURE__*/React.createElement("div", {
      className: "col-md-6"
    }, /*#__PURE__*/React.createElement("div", {
      className: "label-float"
    }, /*#__PURE__*/React.createElement("input", {
      className: "form-control",
      type: "text",
      name: "whatsapp",
      onChange: this.handleInputChange,
      value: this.state.form.whatsapp,
      placeholder: " ",
      maxLength: "15"
    }), /*#__PURE__*/React.createElement("label", {
      htmlFor: "name"
    }, "Whatsapp", /*#__PURE__*/React.createElement("span", {
      className: "label-float-optional"
    }, " - Opicional")), /*#__PURE__*/React.createElement("div", {
      className: "label-box-info"
    })))), /*#__PURE__*/React.createElement("div", {
      className: "row"
    }, /*#__PURE__*/React.createElement("div", {
      className: "col-md-12"
    }, /*#__PURE__*/React.createElement("div", {
      className: "label-float-tx"
    }, /*#__PURE__*/React.createElement("textarea", {
      className: "form-control",
      name: "mensagem",
      onChange: this.handleInputChange,
      value: this.state.form.mensagem,
      rows: "5",
      placeholder: " "
    }), /*#__PURE__*/React.createElement("label", {
      htmlFor: "mensagem"
    }, "Mansagem"), /*#__PURE__*/React.createElement("div", {
      className: "label-box-info-tx-off"
    }, /*#__PURE__*/React.createElement("p", null, "\xA0"))))), /*#__PURE__*/React.createElement("div", {
      className: "clear-float"
    }), /*#__PURE__*/React.createElement("div", {
      className: "dorder-container"
    }, /*#__PURE__*/React.createElement("button", {
      className: "btn btn-theme bg-pri",
      type: "button",
      style: {
        display: this.state.button ? 'block' : 'none'
      },
      onClick: this.contact
    }, "Enviar ", /*#__PURE__*/React.createElement("i", {
      className: "fas fa-angle-right"
    }))), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("div", {
      style: {
        display: this.state.showMsg === 1 ? '' : 'none'
      },
      className: "text-success"
    }, this.state.msg), /*#__PURE__*/React.createElement("div", {
      style: {
        display: this.state.showMsg === 2 ? '' : 'none'
      },
      className: "text-danger"
    }, this.state.msg), /*#__PURE__*/React.createElement("div", {
      style: {
        display: this.state.loading ? 'block' : 'none'
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "fa fa-spin fa-spinner"
    }), "Processando"));
  }

}

ReactDOM.render( /*#__PURE__*/React.createElement(Contact, null), document.getElementById('contact'));