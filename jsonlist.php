<?php
    if(isset($_GET['setList'])){

        $param = json_decode($_REQUEST["param"]);
        console.log($param);
        $filename = 'lpu.json';
        file_put_contents($filename, $param);
    }
    console.log("work it");
?>