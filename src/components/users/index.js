import React, { Component } from 'react'
import {
  Link
} from 'react-router-dom';

const TableHeader = () => {
  return (
    <thead className="thead-dark">
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Job</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Location</th>
        <th>Actions</th>
      </tr>
    </thead>
  )
}

const TableBody = (props) => {
    return (
        <tbody>
            <tr>
                <td>1</td>
                <td>Dahabu Saidi</td>
                <td>SOftware Engineer</td>
                <td>dahabusaidi@gmail.com</td>
                <td>+255717495198</td>
                <td>Dar es salaam</td>
                <td>
                    <button className="btn btn-primary btn-sm">
                        <i className="fa fa-eye"></i>
                    </button>
                    <button className="btn btn-success btn-sm">
                        <i className="fa fa-edit"></i>
                    </button>
                    <button className="btn btn-danger btn-sm">
                        <i className="fa fa-trash"></i>
                    </button>
                </td>
            </tr>

            <tr>
                <td>2</td>
                <td>Papaa Saidi</td>
                <td>SOftware Engineer</td>
                <td>dahabusaidi@gmail.com</td>
                <td>+255717495198</td>
                <td>Dodoma</td>
                <td>
                    <button className="btn btn-primary btn-sm">
                        <i className="fa fa-eye"></i>
                    </button>
                    <button className="btn btn-success btn-sm">
                        <i className="fa fa-edit"></i>
                    </button>
                    <button className="btn btn-danger btn-sm">
                        <i className="fa fa-trash"></i>
                    </button>
                </td>
            </tr>

            <tr>
                <td>3</td>
                <td>Oto Amina</td>
                <td>Student</td>
                <td>dahabusaidi@gmail.com</td>
                <td>+255717495198</td>
                <td>Dar es salaam</td>
                <td className="buttons">
                    <button className="btn btn-primary btn-sm">
                        <i className="fa fa-eye"></i>
                    </button>
                    <button className="btn btn-success btn-sm">
                        <i className="fa fa-edit"></i>
                    </button>
                    <button className="btn btn-danger btn-sm">
                        <i className="fa fa-trash"></i>
                    </button>
                </td>
            </tr>

            <tr>
                <td>4</td>
                <td>Janeth Magufuli</td>
                <td>Mrs President</td>
                <td>dahabusaidi@gmail.com</td>
                <td>+255717495198</td>
                <td>Zanzibar</td>
                <td>
                    <button className="btn btn-primary btn-sm">
                        <i className="fa fa-eye"></i>
                    </button>
                    <button className="btn btn-success btn-sm">
                        <i className="fa fa-edit"></i>
                    </button>
                    <button className="btn btn-danger btn-sm">
                        <i className="fa fa-trash"></i>
                    </button>
                </td>
            </tr>

            <tr>
                <td>5</td>
                <td>Vanesa Mdee</td>
                <td>Musician</td>
                <td>dahabusaidi@gmail.com</td>
                <td>+255717495198</td>
                <td>Dar es salaam</td>
                <td>
                    <button className="btn btn-primary btn-sm">
                        <i className="fa fa-eye"></i>
                    </button>
                    <button className="btn btn-success btn-sm">
                        <i className="fa fa-edit"></i>
                    </button>
                    <button className="btn btn-danger btn-sm">
                        <i className="fa fa-trash"></i>
                    </button>
                </td>
            </tr>

            <tr>
                <td>6</td>
                <td>Regina Mtafi</td>
                <td>Girlfriend</td>
                <td>dahabusaidi@gmail.com</td>
                <td>+255717495198</td>
                <td>Bagamoyo</td>
                <td>
                    <button className="btn btn-primary btn-sm">
                        <i className="fa fa-eye"></i>
                    </button>
                    <button className="btn btn-success btn-sm">
                        <i className="fa fa-edit"></i>
                    </button>
                    <button className="btn btn-danger btn-sm">
                        <i className="fa fa-trash"></i>
                    </button>
                </td>
            </tr>

            <tr>
                <td>7</td>
                <td>Brown Otile</td>
                <td>Dancer</td>
                <td>dahabusaidi@gmail.com</td>
                <td>+255717495198</td>
                <td>Dar es salaam</td>
                <td>
                    <button className="btn btn-primary btn-sm">
                        <i className="fa fa-eye"></i>
                    </button>
                    <button className="btn btn-success btn-sm">
                        <i className="fa fa-edit"></i>
                    </button>
                    <button className="btn btn-danger btn-sm">
                        <i className="fa fa-trash"></i>
                    </button>
                </td>
            </tr>

            <tr>
                <td>8</td>
                <td>Glory Mushi</td>
                <td>Class Mate</td>
                <td>dahabusaidi@gmail.com</td>
                <td>+255717495198</td>
                <td>Dar es salaam</td>
                <td>
                    <button className="btn btn-primary btn-sm">
                        <i className="fa fa-eye"></i>
                    </button>
                    <button className="btn btn-success btn-sm">
                        <i className="fa fa-edit"></i>
                    </button>
                    <button className="btn btn-danger btn-sm">
                        <i className="fa fa-trash"></i>
                    </button>
                </td>
            </tr>
        </tbody>
      
    )
  

}

class Users extends Component
{
    render ()
    {
        return (
          
            
            <div className="content-wrapper">
    <section className="content-header">
      <h1>
        Users Management
      </h1>
      <ol className="breadcrumb">
        <li> <Link to="/"> <i className="fa fa-dashboard"></i> Home</Link></li>
        <li className="active">Users</li>
      </ol>
    </section>

    <section className="content">
      <div className="row">
        <div className="col-md-12">
          <div className="">
            <table className="table table-sm table-bordered">
            <TableHeader/>
            <TableBody></TableBody>
            </table>  
          </div>
        </div>
      </div>      
    </section>
            </div>
        )
  }
}

export default Users