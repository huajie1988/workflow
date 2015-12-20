<?php

/* @var $this yii\web\View */

$this->title = 'Design the table';
?>
<div class="row">
    <div class="col-md-3">
        <div class="panel panel-primary">
            <div class="panel-heading">
                <h3 class="panel-title">Controls List</h3>
            </div>
            <div class="list-group">
                <a href="javascript:void(0);" data-controls="label" class="list-group-item">Label</a>
                <a href="javascript:void(0);" data-controls="text" class="list-group-item">text input</a>
                <a href="javascript:void(0);" data-controls="textarea" class="list-group-item">textarea</a>
                <a href="javascript:void(0);" data-controls="checkbox" class="list-group-item">checkbox</a>
                <a href="javascript:void(0);" data-controls="radio" class="list-group-item">radio</a>
                <a href="javascript:void(0);" data-controls="select" class="list-group-item">select</a>
                <a href="javascript:void(0);" data-controls="button" class="list-group-item">button</a>
            </div>
        </div>
    </div>
    <div class="col-md-9">
        <div class="btn-group" role="group">
            <button type="button" data-direction="vertical" class="btn btn-default active">Vertical</button>
            <button type="button" data-direction="horizontal" class="btn btn-default">Horizontal</button>
        </div>
       <p></p>
        <div class="highlight">
            <pre id="paper">

            </pre>
        </div>
    </div>
</div>
<div id="addPanel" class="panel panel-info myalert" style="display: none;">
    <div class="panel-heading">
        <h3 class="panel-title">Add control<a href="javascript:void(0);" class="win_close fr">X</a></h3>
    </div>
    <div id="control_value" class="panel-body">
    </div>
    <div class="panel-body">
        <button type="button" id="addControlBtn" class="btn btn-info">确定</button>
    </div>
</div>

<?php //$this->beginBlock('myjs') ?>
<!--    $(document).ready(function(){alert("yyy")});-->
<?php //$this->endBlock() ?>
<?php //$this->registerJs($this->blocks['myjs'], \yii\web\View::POS_END); ?>

<?php $this->registerJsFile(yii\helpers\Url::base().'/js/draggabilly.pkgd.min.js', ['depends' => [yii\web\JqueryAsset::className()]]); ?>
<?php $this->registerJsFile(yii\helpers\Url::base().'/js/design.js', ['depends' => [yii\web\JqueryAsset::className()]]); ?>