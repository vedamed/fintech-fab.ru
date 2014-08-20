<?php
/**
 * File _event_rules.php
 *
 * @author Ulashev Roman <truetamtam@gmail.com>
 *
 * @var FintechFab\ActionsCalc\Models\Rule[] $rules
 */
?>
<div id="event-rules-wrap">
	<table width="100%">
		<thead>
		<tr>
			<th>Имя</th>
			<th>Правило</th>
			<th class="text-center">Активно</th>
			<th>Сигнал</th>
			<th>Править</th>
		</tr>
		</thead>
		<tbody>
		<?php foreach ($rules as $rule): ?>
			<tr data-id="<?php echo $rule->id; ?>">
				<td><?php echo $rule->name; ?></td>
				<td><?php echo str_limit($rule->rule, 100, '...'); ?></td>
				<td>
					<div class="switch">
						<input id="rule-flag-active-<?php echo $rule->id; ?>" type="checkbox"
							<?php echo $rule->flag_active ? "checked" : ""; ?>>
						<label class="toggle-rule-flag" for="rule-flag-active-<?php echo $rule->id; ?>"></label>
					</div>
				</td>
				<td><?php echo $rule->signal->signal_sid; ?></td>
				<td>
					<ul class="events-buttons button-group right">
						<li><a href="#" class="tiny button">&nbsp;<i class="fi-page-edit"></i></a></li>
					</ul>
				</td>
			</tr>
		<?php endforeach; ?>
		</tbody>
	</table>
</div>