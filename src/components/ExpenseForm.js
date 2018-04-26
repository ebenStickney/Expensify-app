import React from 'react'; 


export default class ExpenseForm extends React.Component {
    state = {
        description: '',
        note: '', 
        amount: ''
    };
    onDescriptionChange = (e) => {
      const description = e.target.value;
      this.setState(() => ({ description }));
    };
    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState( () => ({ note }));
    };
    
    onAmountChange = (e) => {
        const amount = e.target.value;
        
        if (amount.match(/^\d*(\.\d{0,2})?$/)) {
            this.setState( () => ({amount}) );
        }
    };

    render() {
        return (
          <div>
            <h1>Add Expense</h1> 
            <form>
              <input 
                type="text"
                placeholder="Description"
                autoFocus
                value={this.state.description}
                onChange={this.onDescriptionChange}
              />
              <input 
                type='number'
                placeholder='Amount'
                value={this.state.amount}
                onChange={this.onAmountChange}
              />
              <textarea
                placeholder="Add a note (optional)"
                value={this.state.note}
                onChange={this.onNoteChange}
              >
              </textarea>
              <button>Create Expense</button>
            </form>
          </div>
        )
    }
};