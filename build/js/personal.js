$(()=>{
    const $listPersonal = $("#listPersonal"),
        $modalPersonal = $("#modal-personal")
    
    $listPersonal.DataTable({
        data : [
            {
                "rut":"8449655-3",
                "nombres":"Alexander Luis",
                "apellidos":"Pierce Jimenez",
                "cargo":"Asistente Junior de Tráfico",
                
                "fechaIngreso":"19-02-2018"
            },
            {
                "rut" : "2287338-8",
                "nombres" :"Tiger Nixon",
                "apellidos":"Pierce Jimenez",
                "cargo" :"System Architect",
                
                "fechaIngreso":"2011/04/25"
            },
            {
                "rut" : "6164032-4",
                "nombres" :"Garrett Winters",
                "apellidos":"Pierce Jimenez",
                "cargo" :"Accountant",
                
                "fechaIngreso":"2011/07/25"
              },
              {
                "rut" : "8480053-3",
                "nombres" :"Ashton Cox",
                "apellidos":"Pierce Jimenez",
                "cargo" :"Junior Technical Author",
                
                "fechaIngreso":"2009/01/12"
              },
              {
                "rut" : "5423438-8",
                "nombres" :"Cedric Kelly",
                "apellidos":"Pierce Jimenez",
                "cargo" :"Senior Javascript Developer",
                
                "fechaIngreso":"2012/03/29"
              },
              {
                "rut" : "3491926-3",
                "nombres" :"Airi Satou",
                "apellidos":"Pierce Jimenez",
                "cargo" :"Accountant",
                
                "fechaIngreso":"2008/11/28"
              },
              {
                "rut" : "4002544-1",
                "nombres" :"Brielle Williamson",
                "apellidos":"Pierce Jimenez",
                "cargo" :"Integration Specialist",
                
                "fechaIngreso":"2012/12/02"
              },
              {
                "rut" : "1586111-5",
                "nombres" :"Herrod Chandler",
                "apellidos":"Pierce Jimenez",
                "cargo" :"Sales Assistant",
                
                "fechaIngreso":"2012/08/06"
              },
              {
                "rut" : "2065019-3",
                "nombres" :"Rhona Davidson",
                "apellidos":"Pierce Jimenez",
                "cargo" :"Integration Specialist",
                
                "fechaIngreso":"2010/10/14"
              },
              {
                "rut" : "2652697-7",
                "nombres":"Colleen Hurst",
                "apellidos":"Pierce Jimenez",
                "cargo":"Javascript Developer",
                
                "fechaIngreso":"2009/09/15"
              },
              {
                "rut" : "5295393-4",
                "nombres":"Sonya Frost",
                "apellidos":"Pierce Jimenez",
                "cargo":"Software Engineer",
                
                "fechaIngreso":"2008/12/13"
              },
              {
                "rut" : "6239941-8",
                "nombres":"Jena Gaines",
                "apellidos":"Pierce Jimenez",
                "cargo":"Office Manager",
                
                "fechaIngreso":"2008/12/19"
              },
              {
                "rut" : "6573397-8",
                "nombres":"Quinn Flynn",
                "apellidos":"Pierce Jimenez",
                "cargo":"Support Lead",
                
                "fechaIngreso":"2013/03/03"
              },
              {
                "rut" : "2909429-5",
                "nombres":"Charde Marshall",
                "apellidos":"Pierce Jimenez",
                "cargo":"Regional Director",
                
                "fechaIngreso":"2008/10/16"
              },
              {
                "rut" : "7920772-3",
                "nombres":"Haley Kennedy",
                "apellidos":"Pierce Jimenez",
                "cargo":"Senior Marketing Designer",
                
                "fechaIngreso":"2012/12/18"
              },
              {
                "rut" : "5689968-7",
                "nombres":"Tatyana Fitzpatrick",
                "apellidos":"Pierce Jimenez",
                "cargo":"Regional Director",
                
                "fechaIngreso":"2010/03/17"
              },
              {
                "rut" : "6921500-6",
                "nombres":"Michael Silva",
                "apellidos":"Pierce Jimenez",
                "cargo":"Marketing Designer",
                
                "fechaIngreso":"2012/11/27"
              },
              {
                "rut" : "6734847-8",
                "nombres":"Paul Byrd",
                "apellidos":"Pierce Jimenez",
                "cargo":"Chief Financial Officer (CFO)",
                
                "fechaIngreso":"2010/06/09"
              },
              {
                "rut" : "6238090-6",
                "nombres":"Gloria Little",
                "apellidos":"Pierce Jimenez",
                "cargo":"Systems Administrator",
                
                "fechaIngreso":"2009/04/10"
              },
              {
                "rut" : "2504959-2",
                "nombres":"Bradley Greer",
                "apellidos":"Pierce Jimenez",
                "cargo":"Software Engineer",
                
                "fechaIngreso":"2012/10/13"
              },
              {
                "rut" : "1618697-8",
                "nombres":"Dai Rios",
                "apellidos":"Pierce Jimenez",
                "cargo":"Personnel Lead",
                
                "fechaIngreso":"2012/09/26"
              },
              {
                "rut" : "8333629-8",
                "nombres":"Jenette Caldwell",
                "apellidos":"Pierce Jimenez",
                "cargo":"Development Lead",
                
                "fechaIngreso":"2011/09/03"
              },
              {
                "rut" : "6355369-9",
                "nombres":"Yuri Berry",
                "apellidos":"Pierce Jimenez",
                "cargo":"Chief Marketing Officer (CMO)",
                
                "fechaIngreso":"2009/06/25"
              },
              {
                "rut" : "2795419-9",
                "nombres":"Caesar Vance",
                "apellidos":"Pierce Jimenez",
                "cargo":"Pre-Sales Support",
                
                "fechaIngreso":"2011/12/12"
              },
              {
                "rut" : "3813545-5",
                "nombres":"Doris Wilder",
                "apellidos":"Pierce Jimenez",
                "cargo":"Sales Assistant",
                
                "fechaIngreso":"2010/09/20"
              },
              {
                "rut" : "3982224-4",
                "nombres":"Angelica Ramos",
                "apellidos":"Pierce Jimenez",
                "cargo":"Chief Executive Officer (CEO)",
                
                "fechaIngreso":"2009/10/09"
              },
              {
                "rut" : "4442151-3",
                "nombres":"Gavin Joyce",
                "apellidos":"Pierce Jimenez",
                "cargo":"Developer",
                
                "fechaIngreso":"2010/12/22"
              },
              {
                "rut" : "44434251-3",
                "nombres":"Jennifer Chang",
                "apellidos":"Pierce Jimenez",
                "cargo":"Regional Director",
                
                "fechaIngreso":"2010/11/14"
              },
              {
                "rut" : "1537046-3",
                "nombres":"Brenden Wagner",
                "apellidos":"Pierce Jimenez",
                "cargo":"Software Engineer",
                
                "fechaIngreso":"2011/06/07"
              },
              {
                "rut" : "7320706-8",
                "nombres":"Fiona Green",
                "apellidos":"Pierce Jimenez",
                "cargo":"Chief Operating Officer (COO)",
                
                "fechaIngreso":"2010/03/11"
              }
        ],
        columns: [
            { data: "rut", title: "Rut" },
            { data: "nombres", title: "Nombres" },
            { data: "apellidos", title: "Apellidos" },
            { data: "cargo", title: "Cargo" },
            { data: "fechaIngreso", title: "F. Ingreso" },
            {
                data: null,
                defaultContent:
                    "<button type='button' class='btn btn-xs btn-danger' data-toggle='tooltip' title='delete'><i class='fas fa-trash'></i></button>",
                "orderable": false,
                "searchable": false,
                "width": "26px"
            }
        ]
    }).on("click", "tbody tr td:not(:has(button))", function () {
        $modalPersonal.modal("show");
    });
    
});