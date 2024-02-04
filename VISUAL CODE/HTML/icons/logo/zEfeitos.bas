Attribute VB_Name = "zEfeitos"
Option Explicit

Function TiraEfeitos()

Dim contForm As Control


For Each contForm In Menu.Controls
    
    If TypeName(contForm) = "Label" And Left(contForm.Name, 3) = "cmd" Then
        
        contForm.BackStyle = fmBackStyleTransparent
        contForm.BorderStyle = 1
        
    End If

Next contForm
Set contForm = Nothing

End Function
