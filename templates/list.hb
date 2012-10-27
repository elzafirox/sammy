<h2>Listado</h2>
<hr />
{{#if data}}
	<div class="row">
		<div class="span6">
			<table class="table table-striped">
			{{#each data}}
				<tr>
					<td>{{title}}</td>
					<td>
						<a href="#/edit/{{id}}">
							<button type="button" class="btn">Editar</button>
						</a>
					</td>
					<td>
						<form method="delete" action="#/delete/{{id}}">
							<button type="submit" class="btn btn-danger">Eliminar</button>
						</form>
					</td>			
				</tr>
			{{/each}}
			</table>
		</div>
	</div>
{{else}}
	<div class="alert alert-block">
		<h3>No hay nada que mostrar...</h3>
	</div>
{{/if}}