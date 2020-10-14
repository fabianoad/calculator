import React from 'react';
import Button from './components/Button';
import Display from './components/Display';
import './css/App.css';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      curr: '0',
      oper: '',
      pandoraBox: [],
      result: '',
      ok: false
    }
  }

  reset = (e) => {
    e.preventDefault()
    console.log('reset')
    this.setState({
      curr: '0',
      oper: '',
      pandoraBox: [],
      result: '',
      ok: false
    })
    
  }

  setOper = (e) => {
    e.preventDefault()
   
    this.setState({ oper: e.target.innerHTML })
    
    if(this.state.pandoraBox.length < 3 && !this.state.ok) {
      this.state.pandoraBox.push(this.state.curr)
    

    if(this.state.pandoraBox.length === 1)
      this.state.pandoraBox.push(e.target.innerHTML)

      if(this.state.pandoraBox.length === 2) {
        switch(this.state.pandoraBox[1]) {
          case "x2":
              this.setState({ curr: Number(this.state.pandoraBox[0]) * Number(this.state.pandoraBox[0]), ok: true })
              this.state.pandoraBox.push(this.state.curr)
              break
          case "%":
              console.log('AQUI')
              let panNumber = Number(this.state.pandoraBox[0]/100)
              this.setState({ curr: Number(this.state.pandoraBox[0]) / 100, ok: true })
              this.state.pandoraBox.pop()
              this.state.pandoraBox.pop()
              this.state.pandoraBox.push(panNumber)
              this.state.pandoraBox.push('X')
              console.log('FIZ')
              break
          default:
            console.log('nada')
      }
    }

    if(this.state.pandoraBox.length === 3) {
      let res = 0
      switch(this.state.pandoraBox[1]) {
      case "+":
        this.setState({ curr: Number(this.state.pandoraBox[0]) + Number(this.state.pandoraBox[2]), pandoraBox: [], ok: true })
        console.log(res)
        break
        case "/":
          this.setState({ curr: Number(this.state.pandoraBox[0]) / Number(this.state.pandoraBox[2]), pandoraBox: [], ok: true })
          console.log(res)
          break
        case "-":
          this.setState({ curr: Number(this.state.pandoraBox[0]) - Number(this.state.pandoraBox[2]), pandoraBox: [], ok: true })
          console.log(res)
          break
          case "X":
            this.setState({ curr: Number(this.state.pandoraBox[0]) * Number(this.state.pandoraBox[2]), pandoraBox: [], ok: true })
            console.log(res)
            break
          
      default:
        console.log('nada')
      }
    }
  }
  }

  setAlga = (e) => {
    e.preventDefault()
      
    if(this.state.curr !== '0' && !this.state.oper)
      this.setState({curr: this.state.curr + e.target.innerHTML})
    else this.setState({curr: e.target.innerHTML, oper: '', ok: false})

    

  }

  componentDidUpdate(state, props) {
    console.log(this.state)
    
    
  }


  render() {
    let buttons = [

      {symbol: 'C', cols: 4, action: this.reset},
      {symbol: '%', cols: 4, action: this.setOper},
      {symbol: 'x2', cols: 4, action: this.setOper},
      {symbol: '/', cols: 4, action: this.setOper},
      {symbol: '7', cols: 4, action: this.setAlga},
      {symbol: '8', cols: 4, action: this.setAlga},
      {symbol: '9', cols: 4, action: this.setAlga},
      {symbol: 'X', cols: 4, action: this.setOper},
      {symbol: '4', cols: 4, action: this.setAlga},
      {symbol: '5', cols: 4, action: this.setAlga},
      {symbol: '6', cols: 4, action: this.setAlga},
      {symbol: '-', cols: 4, action: this.setOper},
      {symbol: '1', cols: 4, action: this.setAlga},
      {symbol: '2', cols: 4, action: this.setAlga},
      {symbol: '3', cols: 4, action: this.setAlga},
      {symbol: '+', cols: 4, action: this.setOper},
      {symbol: '+/-', cols: 4, action: this.setOper},
      {symbol: '0', cols: 4, action: this.setAlga},
      {symbol: ',', cols: 4, action: this.setOper},
      {symbol: '=', cols: 4, action: this.setOper}

    ]
    console.log(this.state.pandoraBox)
    return <div className="app-div">
      <Display show={this.state.curr} />
      {
        buttons.map((btn, index) => {
          return <Button key={index} symbol={btn.symbol} cols={btn.cols} action={btn.action} />
        })
      }
     
    </div>
  }
}
export default App