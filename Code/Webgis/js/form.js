/*
 * JavaScript for GPX form
 */

/*
 * Actions that should run on document ready
 */
$( document ).ready(function() {
  // Create datepickers for date form fields
  $( "#start-date" ).datepicker();
  $( "#end-date" ).datepicker();
});


/*
 * Functions
 */

/*
 * Check if the end date is greater than start date on form submit
 */
function checkDates() {
  var sDate = new Date( $('#start-date').val() );
  var eDate = new Date( $('#end-date').val() );

  if (eDate < sDate) {
    alert("End Date should be higher than Start Date");
    return false;
  }
  return true;
}

/*
 * Create Kebele options on choosing a Woreda
 */
function configureDropDownLists(Woreda, Kebele) {
  // Create option arrays
  var Adiyo = ['Sharada','Medwutta','Decha','Angiyo Yecha','Kalisha', 'Angiyo Qolla',
               'Qochiyo', 'Bekiyo Getta', 'Alarigata','Mera','Buta','Yumiya','Daka',
               'Bekiyo Gindecha', 'Dulalala', 'Chare Guta','Rosha','Keje Kata','Wela',
               'Chega','Shasha', 'Mecha', 'Obera','Boqa', 'Gerawa','Kosha','Kalise'];

  var Bita = ['Dega Kella', 'Ogadakity', 'Girecho Gechity', 'Meligawi','Ganity', 'Hamani',
              'Shunity','Andiracha','Washero','Amesha Mecheta', 'Buba Gora', 'Shota',
              'Marakoni', 'Yawira','Sheda', 'Yeda','Yina','Tuga','Dacha Difa', 'Oda',
              'Gaweti', 'Wedity','Kacha Dingera'];

  var Chena = ['Chomecha','Wodafa','Gida','Iramo','Dukra Woshi','Isheta','Biga','Oma Shonga',
               'Wana Bola','Kuta Shoraye','Agaro','Gopa','Beqo','Shishinda','Gurech','Yaga',
               'Boba Gota','Boba Shoray','Boba Qecha','Kossa', 'Boba Qocha','Shayicha Meka',
               'Wara Bamba','Weda Qulish','Donga','Shacha','Wara Sheka','Bala Shasha',
               'Wota Wora','Aja Bamba','Dosha', 'Boba Bala','Donga Gaygoy','Koda','Shayicha Sheka'];

  var Chetta = ['Oja', 'Kora','Kolla','Wertta','Qay','Boba','Sholay','Shaka','Haniya',
                'Cheta Qola','Arara','Diya','Chuchi','Duba','Kushasha','Gamicha','Nomadic Area'];

  var Decha = ['Yeba','Mesqela','Muti','Gogira','Agaro','Modiyo Bola','Baha Gona','Gedam',
               'Gone Weja','Modiyo Gombera','Modiyo Yemita','Erimo','Awasho Qofira','Shora',
               'Awasho','Mankir','Yanga', 'Chiri','Budi','Boba Gecha','Ada','Ufa','Yoka',
               'Sheda','Gabera','Dubiyo','Kuti','Daga','Boba Meliyo','Shapa','Modiyo Yacha',
               'Gidi Tongela','Modiyo Arara','Qeshi','Yaha Checha', 'Angela Menesho','Udadishi',
               'Gessa','Ogiya','Shash','Maligawa','Gundira Gera','Gundira Shala','Shitiyo', 'Chocha'];

  var Gawata = ['Senbete', 'Chebero', 'Belteta', 'Addis Birihan', 'Shupa Waho', 'Qonda',
                'Shupa Dara', 'Gewa', 'Achuwa', 'Shupa Shawa', 'Hinigido', 'Maligawa',
                'Ganity', 'Senteriya', 'Doma', 'Yeshana Turana', 'Saja', 'Immicho',
                'Tagera', 'Qolla', 'Duma', 'Kasha', 'Gawa Mecha', 'Ogity', 'Maliyo',
                'Mesha Mello', 'Geba Koro', 'Medabo', 'Wediyo'];

  var Gesha = ['Gawecha','Gechito Yeri','Wechito Yeri','Wedity', 'Bat Ogity', 'Emiriky',
               'Amero Atta', 'Techity','Bat Ganity','Gawety', 'Nechity','Atta Wedity',
               'Ha\'iti','Danity', 'Abeta', 'Meshamy', 'Yeshito Yeri', 'Yer Kichity',
               'Dirbedo','Meligawa','Yer Danity', 'Andiracha', 'Kicho', 'Didifa'];

  var Gimbo = ['Tula', 'Yabekicha Wolega','Gerepa','Yabekicha','Cheraba','Kicha', 'Tepibuti',
               'Arguba','Ufudo','Beyemo','Baqa','Zingaj','Yeyibitto','Bitta Chega','Shorori',
               'Alem Gono','Shocha', 'Hamani','Woka','Kayakela','Meligawa','Bonga','Qeja Araba',
               'Genet', 'Michity','Tega','Kutti','Shomba Girawa','Shomba Kichibi','Shomba Sheka', 'Umech','Shomba'];

  var Saylem = ['Jil', 'Dabbi Gemi', 'Gasmechi Guracha', 'Gechity','Qochi','Yuna Homi','Sor',
                'Shenkoa','Misso','Dali','Chelesheki Qakera','Dino','Tebela','Senteria','Qejeto',
                'Shunity','Emiriky','Agaro Ogity', 'Yine Meda','Tachiby','Yuna Ginda'];

  var Tello = ['Shupa', 'Achiino','Shida','Gurgupa','Shinato','Guta','Shosha','Bega','Tojaqeda',
               'Migera','Atta','Yama', 'Shada', 'Chama','Wera Silasie','Koba','Chura','Omiya',
               'Gebala','Mesha', 'Gera','Hala','Gadagobena','Dacha'];

  // Look up values and create the Kebele option list
  switch (Woreda.value) {
    case 'Adiyo':
      Kebele.options.length = 0;
      for (i = 0; i < Adiyo.length; i++) {
          createOption(Kebele, Adiyo[i], Adiyo[i]);
      }
      break;
    case 'Bita':
      Kebele.options.length = 0;
      for (i = 0; i < Bita.length; i++) {
        createOption(Kebele, Bita[i], Bita[i]);
      }
      break;
    case 'Chena':
      Kebele.options.length = 0;
      for (i = 0; i < Chena.length; i++) {
          createOption(Kebele, Chena[i], Chena[i]);
      }
      break;
    case 'Chetta':
      Kebele.options.length = 0;
      for (i = 0; i < Chetta.length; i++) {
          createOption(Kebele, Chetta[i], Chetta[i]);
      }
      break;
    case 'Decha':
      Kebele.options.length = 0;
      for (i = 0; i < Decha.length; i++) {
          createOption(Kebele, Decha[i], Decha[i]);
      }
      break;
    case 'Gawata':
      Kebele.options.length = 0;
      for (i = 0; i < Gawata.length; i++) {
          createOption(Kebele, Gawata[i], Gawata[i]);
      }
      break;
    case 'Gesha':
      Kebele.options.length = 0;
      for (i = 0; i < Gesha.length; i++) {
          createOption(Kebele, Gesha[i], Gesha[i]);
      }
      break;
    case 'Gimbo':
      Kebele.options.length = 0;
      for (i = 0; i < Gimbo.length; i++) {
          createOption(Kebele, Gimbo[i], Gimbo[i]);
      }
      break;
    case 'Saylem':
      Kebele.options.length = 0;
      for (i = 0; i < Saylem.length; i++) {
          createOption(Kebele, Saylem[i], Saylem[i]);
      }
      break;
    case 'Tello':
      Kebele.options.length = 0;
      for (i = 0; i < Tello.length; i++) {
          createOption(Kebele, Tello[i], Tello[i]);
      }
      break;
    default:
      Kebele.options.length = 0;
    break;
  }
}

/*
 * Helper function for creating the Kebele option lists
 * Used in configureDropDownLists function
 */
function createOption(ddl, text, value) {
  var opt = document.createElement('option');
  opt.value = value;
  opt.text = text;
  ddl.options.add(opt);
}
