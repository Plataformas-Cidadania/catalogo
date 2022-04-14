@extends('.layout')
@section('title', 'Consulta')
@section('content')
    <div class="container">
        <div class="container-fluid">
            <div class="p-3">&nbsp;</div>
            <div class="dorder-container">
                <div class="bg-lgt dorder-container-mai">
                    <div class="dorder-container-line">
                        <h1>Consulta</h1>
                        <div class="dorder-container-box bg-lgt"></div>
                    </div>
                </div>
            </div>
            <div class="p-3">&nbsp;</div>
        </div>
        <?php /*
        --------------------<br>
        <script src="https://unpkg.com/react@16.7.0/umd/react.production.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/emotion@9.2.12/dist/emotion.umd.min.js"></script>
        <script src="https://unpkg.com/react-dom@16.7.0/umd/react-dom.production.min.js"></script>
        <script src="https://unpkg.com/prop-types@15.5.10/prop-types.min.js"></script>
        <script src="https://unpkg.com/react-input-autosize@2.2.1/dist/react-input-autosize.min.js"></script>
        <script src="https://unpkg.com/react-select@2.1.2/dist/react-select.min.js"></script>
        <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
        <div id="app"></div>
        <script type="text/babel">
            const options = [
                { value: 'Jan', label: 'Jan' },
                { value: 'Feb', label: 'Feb' },
                { value: 'Mar', label: 'Mar' }
            ];

            class App extends React.Component {
                state = {
                    option: null,
                }
                fun = (option) => {
                    this.setState({ option });
                }
                render() {
                    const { option } = this.state;

                    return (
                        <div class="container">
                            Select the one
                            <Select
                                value={option}
                                onChange={this.fun}
                                options={options}
                            />
                            <div class="small">Option selected: </div>
                            {option && option.label}
                        </div>
                    );
                }
            }

            ReactDOM.render(<App />, document.querySelector("#app"))
        </script>
        --------------------<br>
        <?php */ ?>
        <div id="consulta">&nbsp;</div>
        <br><br>
    </div>
@endsection
