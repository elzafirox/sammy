<form class="form-horizontal" action="#/{{action}}{{barra_id}}" method="{{method}}">
	<div class="control-group">
		<label class="control-label" for="titulo">Título</label>
		<div class="controls">
			<input type="text" id="titulo" name="titulo" value="{{title}}" required>
		</div>
	</div>
	<div class="control-group">
		<div class="controls">
			<button type="submit" class="btn btn-primary">Enviar</button>
		</div>
	</div>
</form>