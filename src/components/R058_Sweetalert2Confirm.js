import React, { Component } from 'react'
import Swal from 'sweetalert2'

export default class R058_Sweetalert2Confirm extends Component {
  
  deletAlert = (e) => {
    Swal.fire({
      title:'정말 삭제하시겠습니까?',
      icon:'question',
      showCancelButton:true,
      cancelButtonColor:'#4B088A',
      confirmButtonText:'예',
      cancelButtonText:'아니오'
    }).then((result)=> {
      if(result.value){
        document.getElementById('deleteId').remove();
        Swal.fire(
          'Deleted',
          'sweetalert2 삭제 완료',
          'success'
        )
      }
    })
  }
  
  render() {
    return (
      <>
        <h1 id='deleteId'>sweetalert2</h1>
        <button onClick={e => this.deletAlert()}>삭제</button>
      </>
    )
  }
}
