$(()=>{
    const $listPostulantes = $("#listPostulantes")
       
    
    $listPostulantes.DataTable({
        data : [
            
              {
                "rut" : "5295393-4",
                "nombres":"Sonya Frost",
                "apellidos":"Pierce Jimenez",
              },
              {
                "rut" : "6239941-8",
                "nombres":"Jena Gaines",
                "apellidos":"Pierce Jimenez",
              },
              {
                "rut" : "6573397-8",
                "nombres":"Quinn Flynn",
                "apellidos":"Pierce Jimenez",
              },
              {
                "rut" : "2909429-5",
                "nombres":"Charde Marshall",
                "apellidos":"Pierce Jimenez",
              },
              {
                "rut" : "7920772-3",
                "nombres":"Haley Kennedy",
                "apellidos":"Pierce Jimenez",
              },
              {
                "rut" : "5689968-7",
                "nombres":"Tatyana Fitzpatrick",
                "apellidos":"Pierce Jimenez",
              },
              {
                "rut" : "6921500-6",
                "nombres":"Michael Silva",
                "apellidos":"Pierce Jimenez",
              },
              {
                "rut" : "6734847-8",
                "nombres":"Paul Byrd",
                "apellidos":"Pierce Jimenez",
              },
              {
                "rut" : "6238090-6",
                "nombres":"Gloria Little",
                "apellidos":"Pierce Jimenez",
              },
              {
                "rut" : "2504959-2",
                "nombres":"Bradley Greer",
                "apellidos":"Pierce Jimenez",
              },
              {
                "rut" : "1618697-8",
                "nombres":"Dai Rios",
                "apellidos":"Pierce Jimenez",
              },
              {
                "rut" : "8333629-8",
                "nombres":"Jenette Caldwell",
                "apellidos":"Pierce Jimenez",
              },
              {
                "rut" : "6355369-9",
                "nombres":"Yuri Berry",
                "apellidos":"Pierce Jimenez",
              },
              {
                "rut" : "2795419-9",
                "nombres":"Caesar Vance",
                "apellidos":"Pierce Jimenez",
              },
              {
                "rut" : "3813545-5",
                "nombres":"Doris Wilder",
                "apellidos":"Pierce Jimenez",
              },
              {
                "rut" : "3982224-4",
                "nombres":"Angelica Ramos",
                "apellidos":"Pierce Jimenez",
              },
              {
                "rut" : "4442151-3",
                "nombres":"Gavin Joyce",
                "apellidos":"Pierce Jimenez",
              },
              {
                "rut" : "44434251-3",
                "nombres":"Jennifer Chang",
                "apellidos":"Pierce Jimenez",
              },
              {
                "rut" : "1537046-3",
                "nombres":"Brenden Wagner",
                "apellidos":"Pierce Jimenez",
              },
              {
                "rut" : "7320706-8",
                "nombres":"Fiona Green",
                "apellidos":"Pierce Jimenez",
              }
        ],
        columns: [
            { data: "rut", title: "Rut" },
            { data: "nombres", title: "Nombres" },
            { data: "apellidos", title: "Apellidos" },
            {
                data: null,
                defaultContent:
                    "<button type='button' class='btn btn-xs btn-primary btn-verpostulante' title='Aprobar'>Aprobar</button>",
                "orderable": false,
                "searchable": false,
            },
            {
                data: null,
                defaultContent:
                    "<button type='button' class='btn btn-xs btn-danger btn-verpostulante' title='Rechazar'>Rechazar</button>",
                "orderable": false,
                "searchable": false,
            }
        ]
    }).on("click", "tbody tr td:not(:has(button))", function () {
       
    });
    
});