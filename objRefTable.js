const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.solid,
		C3.Behaviors.Platform,
		C3.Plugins.Keyboard,
		C3.Plugins.Touch,
		C3.Plugins.googleplay,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.System.Acts.GoToLayoutByName,
		C3.Plugins.Keyboard.Cnds.OnKey,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Plugins.Touch.Cnds.OnTapGestureObject,
		C3.Plugins.Touch.Cnds.IsTouchingObject,
		C3.Behaviors.Platform.Acts.SimulateControl,
		C3.Plugins.Sprite.Acts.SetMirrored
	];
};
self.C3_JsPropNameTable = [
	{Sólido: 0},
	{Sprite: 0},
	{Plataforma: 0},
	{Sprite2: 0},
	{Teclado: 0},
	{Sprite3: 0},
	{Sprite4: 0},
	{Sprite5: 0},
	{ControlTáctil: 0},
	{Sprite6: 0},
	{Sprite7: 0},
	{Sprite8: 0},
	{Sprite9: 0},
	{GooglePlay: 0},
	{Dispositivo: 0}
];

self.InstanceType = {
	Sprite: class extends self.ISpriteInstance {},
	Sprite2: class extends self.ISpriteInstance {},
	Teclado: class extends self.IInstance {},
	Sprite3: class extends self.ISpriteInstance {},
	Sprite4: class extends self.ISpriteInstance {},
	Sprite5: class extends self.ISpriteInstance {},
	ControlTáctil: class extends self.IInstance {},
	Sprite6: class extends self.ISpriteInstance {},
	Sprite7: class extends self.ISpriteInstance {},
	Sprite8: class extends self.ISpriteInstance {},
	Sprite9: class extends self.ISpriteInstance {},
	GooglePlay: class extends self.IInstance {}
}