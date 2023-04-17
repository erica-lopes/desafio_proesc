function get_screen_data() {
  document
    .getElementById("button_save")
    .addEventListener("click", function (event) {
      event.preventDefault();

      let page = document.body.innerHTML;
      const data_student = document
        .getElementById("student_name")
        .value.toUpperCase();
      const parentes_student = document
        .getElementById("parentes_name")
        .value.toUpperCase();
      const grade_student = document
        .getElementById("grade")
        .value.toUpperCase();
      const school_year = document
        .getElementById("school_year")
        .value.toUpperCase();
      const level_student = document
        .getElementById("level_education")
        .value.toUpperCase();
      const date_document = document.getElementById("date").value.toUpperCase();
      const class_shift = document.getElementById("shift").value.toUpperCase();

      if (
        data_student === "" ||
        parentes_student === "" ||
        grade_student === "" ||
        school_year === "" ||
        level_student === "" ||
        date_document === "" ||
        class_shift === ""
      ) {
        alert("Por favor, preencha todos os campos antes de continuar.");
        return;
      }

      let date_format = date_document.split("-");
      let day = date_format[2];
      let mounth = date_format[1];

      let mounth_list = [
        "janeiro",
        "fevereiro",
        "março",
        "abril",
        "maio",
        "junho",
        "julho",
        "agosto",
        "setembro",
        "outubro",
        "novembro",
        "dezembro",
      ];

      let mount_text = mounth_list[parseInt(mounth) - 1];
      let new_date = day + " de " + mount_text + " de " + date_format[0];

      document.body.innerHTML = `<div class="div_print"><h1>DECLARAÇÃO ESCOLAR</h1>
      <div class="content"><p id="paragraph">Declaro para os devidos fins que, ${data_student}, 
      filho&#40;a&#41; de ${parentes_student}, aluno&#40;a&#41; regularmente matriculado&#40;a&#41;
      neste estabalecimento em ${school_year}, cursando a ${grade_student} do ${level_student}, turno ${class_shift}.</p> 
      <p class="p2">Por ser esta a expressão da verdade, firmo o presente documento. </p></div><p class="p3">SUZANO - SP, 
      ${new_date}.</p><p class="p4">Secretária Escolar</p><div></div>`;

      window.print();
      location.reload();
      document.body.innerHTML = page;
    });
}
