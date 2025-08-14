<?php
    require "tarefa.model.php";
    require "tarefa.service.php";
    require "conexao.php";

    print_r($_POST);

    $tarefa = new Tarefa();
    $tarefa->__set('tarefa', $_POST['tarefa']);

    $conexao = new Conexao();

    $tarefaService = new TarefaService($conexao, $tarefa);
    $tarefaService->inserir();

    print_r($tarefaService);

?>