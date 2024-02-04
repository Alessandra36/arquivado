<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Parâmetros</title>
</head>
<body>
    <h1>Parâmetros</h1>
    <ul>
		<% 
			dim Params, ArrayOfParams 
			If Request.Form <> "" And Request.QueryString <> "" Then
				Params = Request.Form & "&" & Request.QueryString
			ElseIf Request.Form <> "" Then
				Params = Request.Form
			Else
				Params = Request.QueryString
			End If
		
			ArrayOfParams = Split(Params, "&") 
			
			For Each Param In ArrayOfParams
				Response.Write("<li>")
				Response.Write(Param)
				Response.Write("</li>")
			Next
		%>  
		</ul>
</body>
</html>