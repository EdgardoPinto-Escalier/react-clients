import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Clients extends Component {
  render() {
    const clients = [
      {
        id: '411125',
        firstName: 'Paul',
        lastName: 'Jones',
        email: 'paul@mail.com',
        phone: '222-632-7415',
        balance: '20'
      },
      {
        id: '521555',
        firstName: 'Jenny',
        lastName: 'Thomas',
        email: 'jenny45@mail.com',
        phone: '955-000-6555',
        balance: '60'
      },
      {
        id: '22229',
        firstName: 'Maria',
        lastName: 'Williams',
        email: 'mariame@mail.com',
        phone: '999-522-3333',
        balance: '100.55'
      }
    ];

    if(clients) {
      return (
        <div>
          <div className="row">
            <div className="col-md-6">
              <h2><i className="fas fa-users" /> Clients</h2>
            </div>
            <div className="col-md-6">
            
            </div>
          </div>
          <table className="table table-striped">
            <thead className="thead-inverse">
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Balance</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {clients.map(client => (
                <tr key={client.id}>
                  <td>{client.firstName} {client.lastName}</td>
                  <td>{client.email}</td>
                  <td>${parseFloat(client.balance).toFixed(2)}</td>
                  <td>
                    <Link to={`/client/${client.id}`} className="btn btn-secondary btn-sm">
                      <i className="fas fa-arrow-circle-right" /> Details
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    } else {
      return <h2>Loading...</h2>
    }

    
  }
}

export default Clients;
