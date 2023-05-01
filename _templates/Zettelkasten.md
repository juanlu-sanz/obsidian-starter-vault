---
tags:
  - notes/idea
---
<%*

	let title = await tp.system.prompt("Please enter the title");
	await tp.file.move("/Zettelkasten/" + title)

-%>

# <% title %>
## <% tp.date.now("dddd, Do MMMM YYYY - HH:mm:ss") %>

## References:
