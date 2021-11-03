$(document).ready(function(){

    $('#calcular').click(function(){

        var peso = $('#peso').val();
        var estatura = $('#estatura').val(); 
        //Peso y altura válidos.
        if (peso<=0 || estatura<=0){
            alert("Error, el peso y la estatura deben de ser mayores a 0.");
        }
        else{
            $('.loading-bar').css({
                'visibility':'visible'
            });
            $('.resultado-container').css({
                'visibility':'hidden'
            });
            setTimeout(function (){                       
                
                let IMC = peso/(estatura*estatura);
                IMC = IMC.toFixed(2);
                $('.resultado').text("IMC: "+IMC);
    
                if (IMC>0 && IMC<5) {
                        $('.estado').text("R.I.P.");
                        $('.estado').css({
                            'color':'black'
                        });
                } else if (IMC>=5 && IMC<18.5) {
                        $('.estado').text("Delgadez");
                        $('.estado').css({
                            'color':'#f9c74f'
                        });
                } else if (IMC>= 18.5 && IMC < 24.9) {
                        $('.estado').text("Normal");
                        $('.estado').css({
                            'color':'#43aa8b'
                        });
                } else if (IMC>= 24.9 && IMC <30) {
                        $('.estado').text("Sobrepeso");
                        $('.estado').css({
                            'color':'#f3722c'
                        });
                } else if (IMC >=30 && IMC < 50) {
                        $('.estado').text("Obesidad Severa");
                        $('.estado').css({
                            'color':'#9d0208'
                        })
                } else {
                        $('.estado').text("R.I.P.");
                        $('.estado').css({
                            'color':'black'
                        })
                }
                
                $('.loading-bar').css({
                    'visibility':'hidden'
                });

                $('.resultado-container').css({
                    'visibility':'visible'
                });
    
            }, 2000);
        }
    });

});