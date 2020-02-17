import React, { Component } from 'react'

const TableHeader = () => {
  return (
    <thead className="thead-dark">
      <tr>
        <th>Name</th>
        <th>Job</th>
        <th>Remove</th>
      </tr>
    </thead>
  )
}

const TableBody = (props) => {
  const rows = props.characterData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
            <td>{ row.job }</td>
            <td>
                <button className="btn btn-danger btn-sm" onClick={() => props.removeCharacter(index)}>Delete</button>
            </td>
      </tr>
    )
  })

  return <tbody>{rows}</tbody>
}

class Table extends Component
{
    render ()
    {
        const {characterData, removeCharacter} = this.props
        return (
          <table className="table table-sm table-bordered">
            <TableHeader/>
            <TableBody characterData = {characterData} removeCharacter={removeCharacter}></TableBody>
          </table>
        )
  }
}

export default Table