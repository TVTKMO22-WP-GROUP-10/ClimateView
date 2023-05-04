package com.security.auth.security;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTVerificationException;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.security.auth.data.Site_users;
import com.security.auth.repo.PersonRepository;

@Service
public class SecurityService {
    
    @Autowired
    PersonRepository repo;

    @Autowired
    MyPasswordEncoder myEncoder;

    @Value("${jwt.secret}")
    private String jwtKey;

    /**
     * Register new user or update existing one
     * @param uname
     * @param pw
     * @return
     */
    public Site_users register(String uname, String pw){
       
        Site_users u = new Site_users(uname, myEncoder.encode(pw));
        repo.save(u);
        return u;
    }

    /**
     * Login user. Return token or null if not found or wrong password.
     * @param uname
     * @param pw
     * @return
     */
    public String login(String uname, String pw){
     
        Site_users u = repo.findById(uname).orElse(null);

        if(u == null || !myEncoder.matches(pw, u.password) ){
            return null;
        }

        Algorithm alg = Algorithm.HMAC256(jwtKey);
        return JWT.create().withSubject(u.username).sign(alg);
    }

    /**
     * Verify jwt token and return username if token is valid
     * @param jwtToken
     * @return
     */
    public String validateJwt(String jwtToken){
        Algorithm alg = Algorithm.HMAC256(jwtKey);
        JWTVerifier verifier = JWT.require(alg).build();

        try {
            DecodedJWT jwt = verifier.verify(jwtToken);
            return jwt.getSubject();
        } catch (JWTVerificationException e) {
        }

        return null;
    }
}
