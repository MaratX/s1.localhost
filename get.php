<?php
    if(isset($_GET['getlist'])){
        echo file_get_contents('lpu.json');
    }
?>