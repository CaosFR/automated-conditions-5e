import {
	_preRollAbilitySave,
	_preRollSkill,
	_preRollAbilityTest,
	_preRollAttack,
	_preRollDamage,
	_preRollDeathSave,
	_renderDialog,
	/*_rollAttack*/
} from './ac5e-hooks.mjs';

Hooks.once('init', () => {
	const preRollAbilitySave = Hooks.on('dnd5e.preRollAbilitySave',	_preRollAbilitySave);
	const preRollAbilityTest = Hooks.on('dnd5e.preRollAbilityTest',	_preRollAbilityTest);
	const preRollAttack = Hooks.on('dnd5e.preRollAttack', _preRollAttack);
	//const rollAttack = Hooks.on('dnd5e.rollAttack', _rollAttack);
	const preRollDamage = Hooks.on('dnd5e.preRollDamage', _preRollDamage);
	const preRollDeathSave = Hooks.on('dnd5e.preRollDeathSave',	_preRollDeathSave);
	const preRollSkill = Hooks.on('dnd5e.preRollSkill', _preRollSkill);
	const renderDialog = Hooks.on('renderDialog', _renderDialog);
	console.warn(  //to-do: add rollAttack: ${rollAttack} when/if it is enabled
		`Bugbear's Automated Conditions for 5e added the following dnd5e hooks:
		preRollAbilitySave: ${preRollAbilitySave}
		preRollAbilityTest: ${preRollAbilityTest}
		preRollAttack: ${preRollAttack}
		preRollDamage: ${preRollDamage}
		preRollDeathSave: ${preRollDeathSave}
		preRollSkill: ${preRollSkill}
		renderDialog: ${renderDialog}`
	);
});