<%* 
	let topic = await tp.system.prompt("Please enter topic");
-%>
<% tp.date.now("dddd, Do MMMM YYYY - HH:mm:ss") %> - <% topic %>
##### Notes

<% tp.file.cursor(1) %>

---