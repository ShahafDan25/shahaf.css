<?php 
    include "db.php";

    if($_POST['message'] == "leave-feedback") {
        $c = connDB(); 

        $sql = "SELECT MAX(ID)+1 FROM BlogComments;";
        $s = $c -> prepare($sql);
        $s -> execute();
        $max = $s -> fetchColumn();

        $sql = "INSERT INTO shahafcssFeedbacks VALUES (".$max.", 'Suggestion', '".$_POST['name']."', '".$_POST['feedback']."', 0);";
        try {
            $c -> setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $c -> exec($sql);
        }
        catch(PDOException $e) {
            echo $e;
        }

        $c = null; //close connection
        echo "true";
    }
    if($_POST['message'] == "mark-as-read") {
        $c = connDB();

        $sql = "UPDATE shahafcssFeedbacks SET active = 1 WHERE ID = ".$_POST['ID'].";";
        try {
            $c -> prepare($sql) -> execute();
        }
        catch(PDOException $e) {
            echo $e;
        }

        $c = null; //close connection
        echo "true";
    }

?>