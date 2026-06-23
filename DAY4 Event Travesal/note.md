There are multiple types of event

1> Mouse Event -- dblclick, manuover, mouseleave.....
2> Pointer Event --- click.....
3> Keyboard Event ---- keypress, keydown, keyup....
4> Input Events ------input....
5> Submit Events----- submit ---form ke hote hai




////////////////////////////////////////////////////
Event propogation/ Event Trevesal



top to bottom it is called [event capturing]
bottom to top [bubbling]


window --->Doctype-->HTML--->body---->main---->div---->(button--target event)
(events are global objects top heichery se bottom)

{capture: true}/true top to bottom 

bydefault -- Bubbling enable hota hai..

