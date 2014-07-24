$(document).ready(function () {
	$('button.tableEditBtn').click(function () {

		var $btn = $(this);
		var event = $btn.data('event');

		$('button.changeDataModal').attr({
			'data-id': event.id
		});
		$('#inputName').val(event.name);
		$('#inputSid').val(event.event_sid);


	});


	$('button#actionBtn').click(function () {
		var $btn = $(this);
		var id = $btn.data('id');

		var name = $('#inputName').val();
		var event_sid = $('#inputSid').val();
		$.post('tableEvents/changeData/', {
				id: id,
				name: name,
				event_sid: event_sid
			},
			function (data) {
				if (data['errors']) {
					$('#errorName').html(data['errors']['name']);
					$('#errorSid').html(data['errors']['event_sid']);
					return;
				}
				location.reload();
			}
		);
	});

	$('button#AddEventTable').click(function () {
		var name = $('#inputNameAdd').val();
		var event_sid = $('#inputSidAdd').val();
		$.post('tableEvents/addData/', {
				name: name,
				event_sid: event_sid
			},
			function (data) {
				if (data['errors']) {
					$('#errorNameAdd').html(data['errors']['name']);
					$('#errorSidAdd').html(data['errors']['event_sid']);
					return;
				}
				location.reload();
			}
		);

	});

});

