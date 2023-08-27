export default function Heading(pr)
{
    return(
        <div style= {{ fontFamily:'kanit',
        fontWeight:'bold',
        fontSize:20,
        letterSpacing:1,
        display: 'flex',
        
        alignItems: 'center',
        flexDirection: 'row',}}>
            
            <img src='logo.png' width="60" />
              <div>{pr.title}</div>
        </div>
    )
}