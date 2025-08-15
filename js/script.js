function editar(id, txtTarefa) {
				let form = document.createElement('form');
				form.action = 'tarefa_controller.php?acao=atualizar'
				form.method = 'post'
				form.className = 'row'

				let inputTarefa = document.createElement('input');
				inputTarefa.type = 'text'
				inputTarefa.name = 'tarefa'
				inputTarefa.className = 'col-9 form-control'
				inputTarefa.value = txtTarefa

				let inputId = document.createElement('input')
				inputId.type = 'hidden'
				inputId.name = 'id'
				inputId.value = id

				let button = document.createElement('button');
				button.type = 'submit'
				button.className = 'class-3 btn btn-info'
				button.innerHTML = 'Atualizar'

				form.appendChild(inputTarefa);

				form.appendChild(inputId);

				form.appendChild(button);

				//seleciona a div tarefa
				let tarefa = document.getElementById('tarefa_' + id);

				//limpa o texto da tarefa para inclusão do form
				tarefa.innerHTML = '';

				//inclui o form na pagina
				tarefa.insertBefore(form, tarefa[0]);
}

function editar1(id, txtTarefa) {
				let form = document.createElement('form');
				form.action = 'index.php?pag=index&acao=atualizar'
				form.method = 'post'
				form.className = 'row'

				let inputTarefa = document.createElement('input');
				inputTarefa.type = 'text'
				inputTarefa.name = 'tarefa'
				inputTarefa.className = 'col-9 form-control'
				inputTarefa.value = txtTarefa

				let inputId = document.createElement('input')
				inputId.type = 'hidden'
				inputId.name = 'id'
				inputId.value = id

				let button = document.createElement('button');
				button.type = 'submit'
				button.className = 'class-3 btn btn-info'
				button.innerHTML = 'Atualizar'

				form.appendChild(inputTarefa);

				form.appendChild(inputId);

				form.appendChild(button);

				//seleciona a div tarefa
				let tarefa = document.getElementById('tarefa_' + id);

				//limpa o texto da tarefa para inclusão do form
				tarefa.innerHTML = '';

				//inclui o form na pagina
				tarefa.insertBefore(form, tarefa[0]);
}

function remover(id) {
	location.href = 'todas_tarefas.php?acao=remover&id=' + id;
}

function marcarRealizada(id) {
	location.href = 'todas_tarefas.php?acao=marcarRealizada&id=' + id;
}

function remover1(id) {
	location.href = 'index.php?pag=index&acao=remover&id=' + id;
}

function marcarRealizada1(id) {
	location.href = 'index.php?pag=index&acao=marcarRealizada&id=' + id;
}