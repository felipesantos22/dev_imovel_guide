// $(document).ready(function () {
//   // Card 2
//   $("#cpfInput").mask("000.000.000-00");
//   $("#telefoneInput").mask("(00) 00000-0000");

//   $("#enviarBtn").click(function (event) {
//     event.preventDefault();

//     var form = $("#messageForm")[0];

//     if (form.checkValidity()) {
//       alert("Mensagem enviada com sucesso!");
//       form.submit();
//     } else {
//       form.reportValidity();
//     }
//   });

//   // Card 3
//   $("#calcularBtn").on("click", function () {
//     var valor1 = parseFloat($("#valor1Input").val());
//     var valor2 = parseFloat($("#valor2Input").val());
//     var valor3 = parseFloat($("#valor3Input").val());

//     if (!isNaN(valor1) && !isNaN(valor2) && !isNaN(valor3)) {
//       var resultado = (valor2 * valor3) / valor1;
//       $("#resultadoInput").val(resultado.toFixed(2));
//     } else {
//       alert("Por favor, insira valores válidos em todos os campos.");
//     }
//   });

//   // Card 5
//   $("#downloadBtn").on("click", function () {
//     var element = $("#imageToDownload")[0];

//     html2canvas(element).then(function (canvas) {
//       var imageURL = canvas.toDataURL("image/png");

//       var link = document.createElement("a");
//       link.href = imageURL;
//       link.download = "image.png";

//       $("body").append(link);
//       link.click();
//       $(link).remove();
//     });
//   });

//   // Card 6
//   setTimeout(function () {
//     $(".card6 img").addClass("zoom-in");
//   }, 500);
// });
