$('#table-infor').DataTable();
function delete_data(id){
    var uid = id;
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'ui red button',
          cancelButton: 'ui gray button'
        },
        buttonsStyling: false
      })
      
      swalWithBootstrapButtons.fire({
        title: 'ลบข้อมูล !',
        text: "คุณต้องการลบข้อมูล เลขที่ " + uid + " ใช่หรือไม่",
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'ตกลง',
        cancelButtonText: 'ยกเลิก',
        reverseButtons: true
      }).then((result) => {
        if (result.value) {
            $.ajax({
                url: 'controller/process.php?action=delete',
                method:'post',
                data:{id:uid},
                success:function(data){
                    setTimeout(function(){
                        location.reload();
                    },2000)
                }
            })
          swalWithBootstrapButtons.fire(
            'เสร็จสิ้น!',
            'ลบข้อมูล เลขที่ '+ uid + ' เสร็จสิ้น',
            'success'
          )
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Cancelled',
            'Your imaginary file is safe :)',
            'error'
          )
        }
      })
    
    
    
};




