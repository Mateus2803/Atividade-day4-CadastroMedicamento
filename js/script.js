class Produto {

    constructor(){
        this.ID = 1;
        this.ArrProd = [];
    }


    Adicionar(){
        event.preventDefault();

        let $medicamento = {}
        
            $medicamento.id = this.ID;
            $medicamento.name = document.getElementById('fName').value;
            $medicamento.qtd = document.getElementById('fQtd').value;
            $medicamento.classMedicine = document.getElementById('fClassMedicine').value;

            if(!this.Validar($medicamento)){ return false; }

            this.SalvarDados($medicamento)
            
            this.ListarDados();

            this.LimparForm();

    }

    Validar($medicamento){
        let $msg = '';

            if($medicamento.name == ''){
                $msg += 'Por favor, insira o nome do medicamento! \n'
            }

            if($medicamento.qtd == ''){
                $msg += 'Por favor, insira a quantidade do medicamento! \n'
            }

            if($medicamento.classMedicine == ''){
                $msg += 'Por favor, insira a classe do medicamento! \n'
            }

            if($msg != ''){
                alert($msg);
                return false;
            }

            return true;
    }

    SalvarDados($medicamento){
        this.ArrProd.push($medicamento)
        this.ID++;
    }

    ListarDados(){
        let $tbody = document.getElementById('tbody');
            $tbody.innerHTML = '';

            for(let i=0; i < this.ArrProd.length; i++){
                let $tr = $tbody.insertRow();
                
                let $td_id            = $tr.insertCell();
                let $td_name          = $tr.insertCell();
                let $td_qtd           = $tr.insertCell();
                let $td_classMedicine = $tr.insertCell();
                let $td_remover       = $tr.insertCell();

                let $imagem     = document.createElement('img');
                    $imagem.src = 'img/remover.svg';
                    $imagem.setAttribute('onclick','$M.Deletar('+this.ArrProd[i].id+')');

                    $td_id.innerText            = this.ArrProd[i].id;
                    $td_name.innerText          = this.ArrProd[i].name;
                    $td_qtd.innerText           = this.ArrProd[i].qtd;
                    $td_classMedicine.innerText = this.ArrProd[i].classMedicine;
                    $td_remover.appendChild($imagem);

            }
    }

    LimparForm(){
        document.getElementById('fName').value = '';
        document.getElementById('fQtd').value = '';
        document.getElementById('fClassMedicine').value = '';
    }

    Deletar($id){
        let $tbody = document.getElementById('tbody');

            for(let i=0; i < this.ArrProd.length; i++){

                if(this.ArrProd[i].id == $id){
                    this.ArrProd.splice(i, 1);

                    $tbody.deleteRow(i);
                }
            }

            alert('Item deletado com sussesso!')
    }

}

var $M = new Produto();